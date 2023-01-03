import { useContext } from 'react';
import { UploaderFile as File } from 'simple-uploader.js';
import { UploaderFile } from '../File';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';
export const UploaderList = ({ fileList }: { fileList: File[] }) => {
  // console.log('render');
  const { isSupport } = useContext(UploaderContext);
  if (!isSupport) return null;
  return (
    <div className="uploader-list">
      <ul>
        {fileList.map((file) => (
          <UploaderFile key={file.id} file={file} list={true}></UploaderFile>
        ))}
      </ul>
    </div>
  );
};
