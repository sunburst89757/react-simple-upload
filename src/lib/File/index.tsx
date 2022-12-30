import { useEffect, useRef, useState } from 'react';
import { UploaderFile as File } from 'simple-uploader.js';
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
  const handlers = useRef<Record<string, any> | null>({});

  // const [paused, setPaused] = useState(false);
  // const [error, setError] = useState(false);
  // const [averageSpeed, setAverageSpeed] = useState(0);
  // const [currentSpeed, setCurrentSpeed] = useState(0);
  // const [isComplete, setIsComplete] = useState(false);
  // const [isUploading, setIsUploading] = useState(false);
  // const [size, setSize] = useState(0);
  // const [formatedSize, setFormatedSize] = useState('');
  // const [uploadedSize, setUploadedSize] = useState(0);
  // const [progress, setProgress] = useState(0);
  // const [timeRemaining, setTimeRemaining] = useState(0);
  // const [type, setType] = useState('');
  // const [extension, setExtension] = useState('');
  const pause = () => {};
  const retry = () => {};
  const resume = () => {};
  const remove = () => {};
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
    debugger;
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
      handlers.current = null;
    };
  }, []);
  return (
    <>
      <div className="uploader-file-info">
        <div className="uploader-file-name">
          <i className="uploader-file-icon"></i>
          {file.name}
        </div>
        <div className="uploader-file-size">大小</div>
        <div className="uploader-file-meta"></div>
        <div className="uploader-file-status">
          <span>状态</span>
          <span>
            <span>进度</span>
            <em>速度</em>
            <i>剩余时间</i>
          </span>
        </div>
        <div className="uploader-file-actions">
          <span className="uploader-file-pause" onClick={pause}></span>
          <span className="uploader-file-resume" onClick={resume}></span>
          <span className="uploader-file-retry" onClick={retry}></span>
          <span className="uploader-file-remove" onClick={remove}></span>
        </div>
      </div>
    </>
  );
};
