import './index.scss';

interface UnSupportProps {
  children?: JSX.Element | string;
}
export const UnSupport = ({ children }: UnSupportProps) => {
  return (
    <div className="uploader-unsupport">
      {children || <p>你的浏览器等级过低暂不支持上传组件</p>}
    </div>
  );
};
