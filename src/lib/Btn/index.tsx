import { Children, useRef } from 'react';
import './index.scss';
interface BtnProps {
  children: JSX.Element | string;
}
export const UploaderBtn = ({ children }: BtnProps) => {
  const btnRef = useRef<HTMLLabelElement>(null);
  return (
    <div>
      <label className="uploader-btn" ref={btnRef}>
        {children}
      </label>
    </div>
  );
};
