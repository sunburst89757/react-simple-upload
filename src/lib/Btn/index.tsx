import { useEffect, useRef, useContext } from 'react';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';
interface BtnProps {
  children: JSX.Element | string;
  directory?: boolean;
  single?: boolean;
  attributes?: string;
}
export const UploaderBtn = ({
  children,
  directory = false,
  single = false,
  attributes = ''
}: BtnProps) => {
  const btnRef = useRef<HTMLLabelElement>(null);
  const { uploader } = useContext(UploaderContext);
  useEffect(() => {
    // 指定的按钮实现上传
    uploader?.assignBrowse(btnRef.current!, directory, single, attributes);
  }, [uploader]);
  return (
    <div>
      <label className="uploader-btn" ref={btnRef}>
        {children}
      </label>
    </div>
  );
};
