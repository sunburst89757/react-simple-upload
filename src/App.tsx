import { Button } from 'antd';
import { useState } from 'react';
import { Example } from './example';
import { Example1 } from './example1';
import Uploader from './lib';
import { UploadFile } from './lib/types';
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        销毁测试
      </Button>
      {/* <Example></Example> */}
      {/* <Uploader
        options={options}
        onFileComplete={fileComplete}
        onComplete={complete}
      ></Uploader> */}
      {show ? <Example1></Example1> : null}
    </>
  );
}

export default App;
