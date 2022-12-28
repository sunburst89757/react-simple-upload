import Uploader from './lib';
import style from './App.module.scss';
import { useState } from 'react';
function App() {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  return (
    <div className={style.container}>
      <Uploader options={options}></Uploader>
    </div>
  );
}

export default App;
