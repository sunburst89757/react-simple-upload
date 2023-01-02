import { useState } from 'react';
import { UploaderFile } from 'simple-uploader.js';
import Uploader from './lib';
import './App.scss';
function App() {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (file1: UploaderFile, file2: UploaderFile) => {};
  const complete = () => {};
  return (
    <div className="container">
      <Uploader
        options={options}
        onFileComplete={fileComplete}
        onComplete={complete}
      ></Uploader>
    </div>
  );
}

export default App;
