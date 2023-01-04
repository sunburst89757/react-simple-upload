import { useContext } from 'react';
import { UploaderFile as File } from 'simple-uploader.js';
import { UploaderFile } from '../File';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';
export const UploaderList = ({
  fileList,
  children
}: {
  fileList: File[];
  children?: (fileList: File[]) => JSX.Element;
}) => {
  // console.log('render');
  const { isSupport } = useContext(UploaderContext);
  if (!isSupport) return null;
  return (
    <div className="uploader-list">
      {children ? (
        children(fileList)
      ) : (
        <ul>
          {fileList.map((file) => (
            <UploaderFile key={file.id} file={file} list={true}></UploaderFile>
          ))}
        </ul>
      )}
    </div>
  );
};
