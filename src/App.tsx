import Uploader from './lib';
import style from './App.module.scss';
import { useState } from 'react';
import { UploaderFile } from 'simple-uploader.js';
function App() {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (file1: UploaderFile, file2: UploaderFile) => {};
  const complete = () => {};
  return (
    <div className={style.container}>
      <Uploader
        options={options}
        onFileComplete={fileComplete}
        onComplete={complete}
      ></Uploader>
    </div>
  );
}

export default App;
