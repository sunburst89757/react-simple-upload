import { useContext, useEffect, useRef, useState } from 'react';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';
interface DropProps {
  children?: JSX.Element;
}
export const UploaderDrop = ({ children }: DropProps) => {
  const { uploader, isSupport } = useContext(UploaderContext);
  if (!isSupport) return null;
  const DropEle = useRef<HTMLDivElement>(null);
  const [dropClass, setDropClass] = useState('');
  const onDragEnter = () => {
    setDropClass('uploader-dragover');
  };
  const onDragLeave = () => {
    setDropClass('');
  };
  const onDrop = () => {
    setDropClass('uploader-droped');
  };
  useEffect(() => {
    uploader?.assignDrop(DropEle.current!);
    uploader?.on('dragenter', onDragEnter);
    uploader?.on('dragleave', onDragLeave);
    uploader?.on('drop', onDrop);

    return () => {
      uploader?.off('dragenter', onDragEnter);
      uploader?.off('dragleave', onDragLeave);
      uploader?.off('drop', onDrop);
      if (DropEle.current) {
        uploader?.unAssignDrop(DropEle.current!);
      }
      console.log('error end');
    };
  }, [uploader]);
  return (
    <div className={`uploader-drop ${dropClass}`} ref={DropEle}>
      {children}
    </div>
  );
};
