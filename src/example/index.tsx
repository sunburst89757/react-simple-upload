import { useState } from 'react';
import { UploaderFile } from 'simple-uploader.js';
//  @ts-ignore
import Uploader from '../../dist/react-upload.js';
export const Example = () => {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (file1: UploaderFile, file2: UploaderFile) => {
    console.log(file1, file2, '111');
  };
  const complete = () => {
    console.log('complete', '1111');
  };
  return (
    <div>
      <Uploader
        options={options}
        onFileComplete={fileComplete}
        onComplete={complete}
      ></Uploader>
    </div>
  );
};
