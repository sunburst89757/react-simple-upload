import { useRef } from 'react';
import './index.scss';
interface DropProps {
  children?: JSX.Element;
}
export const UploaderDrop = ({ children }: DropProps) => {
  const DropEle = useRef<HTMLDivElement>(null);
  return (
    <div className="uploader-drop" ref={DropEle}>
      {children}
    </div>
  );
};
