import { useEffect, useMemo, useRef, useState } from 'react';
import Uploader, { UploaderFile as File } from 'simple-uploader.js';
import { defaultCategoryMap } from '../config';
import { secondsToStr } from '../utils/time';
import './index.scss';
interface IProps {
  file: File;
  list?: boolean;
}
const fileEvents = ['fileProgress', 'fileSuccess', 'fileComplete', 'fileError'];
export const UploaderFile = ({ file, list = false }: IProps) => {
  const [fileInfo, setFileInfo] = useState({
    paused: false,
    error: false,
    averageSpeed: 0,
    currentSpeed: 0,
    isComplete: false,
    isUploading: false,
    size: 0,
    formatedSize: '',
    uploadedSize: 0,
    progress: 0,
    timeRemaining: 0,
    type: '',
    extension: ''
  });
  const [response, setResponse] = useState<string | null>(null);
  const [progressingClass, setProgressingClass] = useState('');
  //  处理定时器
  const tid = useRef<any>(null);
  const handlers = useRef<Record<string, any> | null>({});
  const status = useMemo(() => {
    const { isUploading, isComplete, error, paused } = fileInfo;
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
  }, [
    fileInfo.isUploading,
    fileInfo.isComplete,
    fileInfo.error,
    fileInfo.paused
  ]);
  const fileCategory = useMemo(() => {
    const isFolder = file.isFolder;
    let type = isFolder ? 'folder' : 'unknown';
    const categoryMap = file.uploader.opts.categoryMap;
    const typeMap = categoryMap || defaultCategoryMap;
    Object.keys(typeMap).forEach((_type) => {
      const extensions = typeMap[_type];
      if (extensions.indexOf(fileInfo.extension) > -1) {
        type = _type;
      }
    });
    return type;
  }, [fileInfo.extension]);
  // 计算逻辑有问题
  const progressStyle = useMemo(() => {
    const progress = Math.floor(fileInfo.progress * 100);
    const style = `translateX(${Math.floor(progress - 100)}%)`;
    return {
      progress: `${progress}%`,
      WebkitTransform: style,
      MozTransform: style,
      msTransform: style,
      transform: style
    };
  }, [fileInfo.progress]);
  const formatedAverageSpeed = useMemo(
    () => `${Uploader.utils.formatSize(fileInfo.averageSpeed)} / s`,
    [fileInfo.averageSpeed]
  );
  const statusText = useMemo(
    () => file.uploader.fileStatusText[status],
    [status]
  );
  const formatedTimeRemaining = useMemo(() => {
    const { timeRemaining } = fileInfo;
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
  }, [fileInfo.timeRemaining]);
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
    const { averageSpeed, currentSpeed } = file;
    setFileInfo({
      ...fileInfo,
      averageSpeed,
      currentSpeed,
      progress: file.progress(),
      timeRemaining: file.timeRemaining(),
      uploadedSize: file.sizeUploaded()
    });
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
    setFileInfo({
      ...fileInfo,
      error: false,
      isComplete: true,
      isUploading: false
    });
  };
  const _fileComplete = () => {
    _fileSuccess();
  };
  const _fileError = (rootFile: File, file: File, message: string) => {
    _fileProgress();
    processResponse(message);
    setFileInfo({
      ...fileInfo,
      error: true,
      isComplete: false,
      isUploading: false
    });
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
    console.log(event, '事件');

    const rootFile = args[0];
    console.log(event, args, '文件事件处理');
    // debugger;
    const file = args[1];
    const target = list ? rootFile : file;
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
    const { paused, error } = file;
    setFileInfo({
      ...fileInfo,
      paused,
      error,
      isUploading: file.isUploading()
    });
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
    // 初始化fileInfo
    const staticProps = ['paused', 'error', 'averageSpeed', 'currentSpeed'];
    const fnProps = [
      'isComplete',
      'isUploading',
      {
        key: 'size',
        fn: 'getSize'
      },
      {
        key: 'formatedSize',
        fn: 'getFormatSize'
      },
      {
        key: 'uploadedSize',
        fn: 'sizeUploaded'
      },
      'progress',
      'timeRemaining',
      {
        key: 'type',
        fn: 'getType'
      },
      {
        key: 'extension',
        fn: 'getExtension'
      }
    ];
    const initialFileInfo: Record<string, any> = {};
    staticProps.forEach((prop) => {
      initialFileInfo[prop] = file[prop];
    });
    fnProps.forEach((fnProp) => {
      if (typeof fnProp === 'string') {
        initialFileInfo[fnProp] = file[fnProp]();
      } else {
        initialFileInfo[fnProp.key] = file[fnProp.fn]();
      }
    });
    setFileInfo(initialFileInfo as typeof fileInfo);
    // 是不是返回值无所谓 解决的是ts的报错
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
      // handlers.current = null;
    };
  }, []);
  return (
    <>
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
          <div className="uploader-file-size">{fileInfo.formatedSize}</div>
          <div className="uploader-file-meta"></div>
          <div className="uploader-file-status">
            {status !== 'uploading' && <span>{statusText}</span>}
            {status === 'uploading' && (
              <span>
                <span>{progressStyle.progress}</span>
                <em>{formatedAverageSpeed}</em>
                <i>{formatedTimeRemaining}</i>
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
    </>
  );
};
