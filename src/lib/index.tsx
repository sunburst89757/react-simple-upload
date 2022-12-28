import { UploaderBtn } from './Btn';
import { UploaderDrop } from './Drop';
import { UploaderList } from './List';
import { UnSupport } from './UnSupport';
import './index.scss';
interface IProps {
  options: UploaderOptions;
  fileStatusText?: Record<string, string>;
}
interface UploaderOptions {
  target: string;
  testChunks: Boolean;
}
export default function Uploader(props: IProps) {
  const {
    options,
    fileStatusText = {
      success: '成功了',
      error: '出错了',
      uploading: '上传中',
      paused: '暂停中',
      waiting: '等待中'
    }
  } = props;
  return (
    <div className="uploader-example uploader">
      <UnSupport></UnSupport>
      <UploaderDrop>
        <>
          <p className="m-3">把文件拖拽到此处进行上传</p>
          <div className="flex">
            <UploaderBtn>选择文件</UploaderBtn>
            <UploaderBtn>选择文件夹</UploaderBtn>
          </div>
        </>
      </UploaderDrop>
      <UploaderList></UploaderList>
    </div>
  );
}
