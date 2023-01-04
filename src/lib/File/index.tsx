import { useEffect, useMemo, useRef, useState } from 'react';
import Uploader, { UploaderFile as File } from 'simple-uploader.js';
import { defaultCategoryMap } from '../config';
import { secondsToStr } from '../utils/time';
import './index.scss';
interface IProps {
  file: File;
  list?: boolean;
  children?: ({
    error,
    paused
  }: {
    name: string;
    size: string;
    averageSpeed: string;
    error: boolean;
    paused: boolean;
    isComplete: boolean;
    isUploading: boolean;
    progress: number;
    formatedTimeRemaining: string;
    status: 'success' | 'error' | 'uploading' | 'paused' | 'waiting';
    statusText: string;
    fileCategory: string;
    pause: () => void;
    retry: () => void;
    resume: () => void;
    remove: () => void;
  }) => JSX.Element;
}
const fileEvents = ['fileProgress', 'fileSuccess', 'fileComplete', 'fileError'];
export const UploaderFile = ({ file, list = false, children }: IProps) => {
  const [error, setError] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [response, setResponse] = useState<string | null>(null);
  const [progressingClass, setProgressingClass] = useState('');
  //  处理定时器
  const tid = useRef<any>(null);
  const handlers = useRef<Record<string, any> | null>({});
  const status = useMemo(() => {
    if (isComplete) {
      return 'success';
    } else if (error) {
      return 'error';
    } else if (isUploading) {
      return 'uploading';
    } else if (paused) {
      return 'paused';
    } else {
      return 'waiting';
    }
  }, [isUploading, isComplete, error, paused]);
  const fileCategory = useMemo(() => {
    const isFolder = file.isFolder;
    const extension = file.getExtension();
    let type = isFolder ? 'folder' : 'unknown';
    const categoryMap = file.uploader.opts.categoryMap;
    const typeMap = categoryMap || defaultCategoryMap;
    Object.keys(typeMap).forEach((_type) => {
      const extensions = typeMap[_type];
      if (extensions.indexOf(extension) > -1) {
        type = _type;
      }
    });
    return type;
  }, [file.getExtension()]);
  // 计算逻辑有问题
  const progressStyle = useMemo(() => {
    const Progress = Math.floor(progress * 100);
    const style = `translateX(${Math.floor(Progress - 100)}%)`;
    return {
      progress: `${Progress}%`,
      WebkitTransform: style,
      MozTransform: style,
      msTransform: style,
      transform: style
    };
  }, [progress]);
  const formatedAverageSpeed = useMemo(
    () => `${Uploader.utils.formatSize(file.averageSpeed)} / s`,
    [file.averageSpeed]
  );
  const statusText = useMemo(
    () => file.uploader.fileStatusText[status],
    [status]
  );
  const formatedTimeRemaining = useMemo(() => {
    if (timeRemaining === Number.POSITIVE_INFINITY || timeRemaining === 0) {
      return '';
    }
    let parsedTimeRemaining = secondsToStr(timeRemaining);
    // 按照配置进行剩余时间转换
    const parseTimeRemaining = file.uploader.opts.parseTimeRemaining;
    if (parseTimeRemaining) {
      parsedTimeRemaining = parseTimeRemaining(
        timeRemaining,
        parsedTimeRemaining
      );
    }
    return parsedTimeRemaining;
  }, [timeRemaining]);
  const pause = () => {
    file.pause();
    _actionCheck();
    _fileProgress();
  };
  const retry = () => {
    file.retry();
    _actionCheck();
  };
  const resume = () => {
    file.resume();
    _actionCheck();
  };
  const remove = () => {
    file.cancel();
  };
  const _fileProgress = () => {
    // debugger;
    setTimeRemaining(file.timeRemaining());
    setProgress(file.progress());
    _actionCheck();
  };
  const _fileSuccess = (
    rootFile?: null | File,
    file?: File,
    message?: string
  ) => {
    if (rootFile) {
      processResponse(message!);
    }
    _fileProgress();
    setError(false);
    setIsComplete(true);
    setIsUploading(false);
  };
  const _fileComplete = () => {
    _fileSuccess();
  };
  const _fileError = (rootFile: File, file: File, message: string) => {
    _fileProgress();
    processResponse(message);
    setError(true);
    setIsComplete(false);
    setIsUploading(false);
  };
  const eventObj = useRef<Record<string, Function>>({
    _fileProgress,
    _fileSuccess,
    _fileComplete,
    _fileError
  });
  const processResponse = (message: string) => {
    let res = message;
    try {
      res = JSON.parse(res);
    } catch (error) {
      setResponse(res);
    }
  };
  const fileEventsHandler = (event: string, args: any[]) => {
    // debugger;
    console.log(event, '事件');

    const rootFile = args[0];
    console.log(event, args, '文件事件处理');
    // debugger;
    const fileList = args[1];
    const target = list ? rootFile : fileList;
    if (file === target) {
      if (list && event === 'fileSuccess') {
        processResponse(args[2]);
        return;
      }
      //  动态执行函数
      eventObj.current[`_${event}`]();
    }
  };
  const _actionCheck = () => {
    setError(file.error);
    setPaused(file.paused);
    setIsUploading(file.isUploading());
  };
  useEffect(() => {
    if (status === 'uploading') {
      tid.current = setTimeout(() => {
        setProgressingClass('uploader-file-progressing');
      }, 200);
    } else {
      clearTimeout(tid.current);
      setProgressingClass('');
    }
  }, [status]);
  useEffect(() => {
    setError(file.error);
    setPaused(file.paused);
    setIsComplete(file.isComplete());
    setIsUploading(file.isUploading());
    setProgress(file.progress());
    setTimeRemaining(file.timeRemaining());
    // 是不是返回值无所谓 解决的是ts的报错
    //  文件进行四个事件的监听
    const eventHandler = (event: string) =>
      (handlers.current![event] = (...args: any[]) => {
        fileEventsHandler(event, args);
      });
    fileEvents.forEach((event) => {
      console.log('event', event);
      file.uploader.on(event, eventHandler(event));
    });
    return () => {
      //  销毁前将未执行完的监听执行一次
      fileEvents.forEach((event) => {
        file.uploader.off(event, handlers.current![event]);
      });
      // GC
      handlers.current = null;
    };
  }, []);
  return (
    <>
      {children ? (
        children({
          name: file.name,
          size: file.getFormatSize(),
          averageSpeed: formatedAverageSpeed,
          error,
          paused,
          isComplete,
          isUploading,
          progress,
          formatedTimeRemaining,
          status,
          statusText,
          fileCategory,
          pause,
          remove,
          resume,
          retry
        })
      ) : (
        <div className="uploader-file" status={status}>
          <div
            className={`uploader-file-progress ${progressingClass}`}
            style={progressStyle}
          ></div>
          <div className="uploader-file-info">
            <div className="uploader-file-name">
              <i className="uploader-file-icon" icon={fileCategory}></i>
              {file.name}
            </div>
            <div className="uploader-file-size">{file.getFormatSize()}</div>
            <div className="uploader-file-meta"></div>
            <div className="uploader-file-status">
              {status !== 'uploading' && <span>{statusText}</span>}
              {status === 'uploading' && (
                <span>
                  <span>{progressStyle.progress} </span>
                  <em>{formatedAverageSpeed} </em>
                  <i>{formatedTimeRemaining} </i>
                </span>
              )}
            </div>
            <div className="uploader-file-actions">
              <span className="uploader-file-pause" onClick={pause}></span>
              <span className="uploader-file-resume" onClick={resume}></span>
              <span className="uploader-file-retry" onClick={retry}></span>
              <span className="uploader-file-remove" onClick={remove}></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
