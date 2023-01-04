import { useEffect, useRef, useState } from 'react';
import Uploader, { UploaderFile } from 'simple-uploader.js';
import { UploaderBtn } from './Btn';
import { UploaderDrop } from './Drop';
import { UploaderList } from './List';
import { UnSupport } from './UnSupport';
import { UploaderContext } from './utils/UploaderContext';
import './index.css';
import { UploaderAllEvents } from './types';

interface IProps extends UploaderAllEvents {
  options: UploaderOptions;
  fileStatusText?: Record<string, string>;
  autoStart?: Boolean;
  children?: ({ fileList }: { fileList: UploaderFile[] }) => JSX.Element;
}
interface UploaderOptions {
  target: string;
  testChunks: Boolean;
  [objkey: string]: any;
}

export default function Upload(props: IProps) {
  const {
    options,
    fileStatusText = {
      success: '成功了',
      error: '出错了',
      uploading: '上传中',
      paused: '暂停中',
      waiting: '等待中'
    },
    autoStart = true,
    onFileComplete = () => {},
    onComplete = () => {},
    onChange = () => {},
    onFilesSubmitted = () => {},
    onFileProgress = () => {},
    onFileSuccess = () => {},
    onFileAdded = () => {},
    onFilesAdded = () => {},
    children
  } = props;
  const uploader = useRef<Uploader | null>(new Uploader(options));
  const isSupport = useRef(uploader.current?.support);
  const [fileList, setFileList] = useState<UploaderFile[]>([]);
  const allEvent = (...args: any[]) => {
    console.log(args, '事件监听');

    const eventName = args[0];
    switch (eventName) {
      case 'change':
        onChange(args[1]!);
        break;
      case 'filesSubmitted':
        setFileList([...uploader.current?.fileList!]);
        uploader.current!.upload();
        onFilesSubmitted(args[1], args[2], args[3]);
        break;
      case 'fileProgress':
        onFileProgress(args[1], args[2], args[3]);
        break;
      case 'fileSuccess':
        onFileSuccess(args[1], args[2], args[3], args[4]);
        break;
      case 'fileComplete':
        onFileComplete(args[1]);
        break;
      case 'complete':
        onComplete();
        break;
      case 'fileAdded':
        // setFileList((fileList) => [...fileList, args[1]]);
        onFileAdded(args[1]);
        break;
      case 'filesAdded':
        onFilesAdded(args[1], args[2]);
        break;
      case 'fileRemoved':
        setFileList([...uploader.current?.fileList!]);
    }
  };
  useEffect(() => {
    uploader.current!.fileStatusText = fileStatusText;
    //  事件监听  监听常见的事件
    uploader.current!.on('catchAll', allEvent);
    // @ts-ignore 便于调试
    window.uploader = uploader.current;
    return () => {
      // 关闭监听 并将未返回的回调 进行回调
      uploader.current?.off('catchAll', allEvent);
      uploader.current = null;
    };
  }, []);
  return (
    <div className="uploader-example uploader">
      <UploaderContext.Provider
        value={{
          uploader: uploader.current,
          isSupport: isSupport.current
        }}
      >
        {children ? (
          children({ fileList })
        ) : (
          <>
            <UnSupport></UnSupport>
            <UploaderDrop>
              <>
                <p className="m-3">把文件拖拽到此处进行上传</p>
                <div className="flex">
                  <UploaderBtn>选择文件</UploaderBtn>
                  <UploaderBtn directory={true}>选择文件夹</UploaderBtn>
                </div>
              </>
            </UploaderDrop>
            <UploaderList fileList={fileList}></UploaderList>
          </>
        )}
      </UploaderContext.Provider>
    </div>
  );
}
