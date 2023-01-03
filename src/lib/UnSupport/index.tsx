import { useContext } from 'react';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';

interface UnSupportProps {
  children?: JSX.Element;
}
export const UnSupport = ({ children }: UnSupportProps) => {
  const { isSupport } = useContext(UploaderContext);
  return !isSupport ? (
    <div className="uploader-unsupport">
      {children || <p>你的浏览器等级过低暂不支持上传组件</p>}
    </div>
  ) : null;
};
