import { useState } from 'react';

//  @ts-ignore
import Uploader from '../../dist/react-simple-upload.js';
import { UploadFile } from '../lib/types.js';
export const Example = () => {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (rootFile: UploadFile) => {
    console.log(rootFile, 'fileComplete');
  };
  const complete = () => {
    console.log('complete');
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
