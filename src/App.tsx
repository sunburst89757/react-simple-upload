import { useState } from 'react';
import { Example } from './example';
import Uploader from './lib';
import { UploaderFile } from './lib/types';
function App() {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (rootFile: UploaderFile) => {
    console.log(rootFile, 'fileComplete');
  };
  const complete = () => {
    console.log('complete');
  };
  return (
    <>
      {/* <Example></Example> */}
      <Uploader
        options={options}
        onFileComplete={fileComplete}
        onComplete={complete}
      ></Uploader>
    </>
  );
}

export default App;
