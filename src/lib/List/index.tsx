import { useContext } from 'react';
import { LibFile } from 'simple-uploader.js';
import { UploaderFile } from '../File';
import { UploaderContext } from '../utils/UploaderContext';
import './index.scss';
export const UploaderList = ({
  fileList,
  children
}: {
  fileList: LibFile[];
  children?: (fileList: LibFile[]) => JSX.Element;
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
