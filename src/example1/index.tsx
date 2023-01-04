import { useState } from 'react';
import { Space } from 'antd';
import {
  CaretRightOutlined,
  ReloadOutlined,
  PauseOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { UploaderFile as File } from 'simple-uploader.js';
import Uploader from '../lib';
import { UploaderBtn } from '../lib/Btn';
import { UploaderDrop } from '../lib/Drop';
import { UploaderFile } from '../lib/File';
import { UploaderList } from '../lib/List';
import { UnSupport } from '../lib/UnSupport';
export const A = () => {
  const [options, setoptions] = useState({
    target: '//localhost:3000/upload', // '//jsonplaceholder.typicode.com/posts/',
    testChunks: false
  });
  const fileComplete = (rootFile: File) => {
    console.log(rootFile, 'fileComplete');
  };
  const complete = () => {
    console.log('complete');
  };
  return (
    <>
      <Uploader options={options}>
        {({ fileList }) => (
          <>
            <UnSupport></UnSupport>
            <UploaderDrop>
              <>
                <p>拖拽上传</p>
                <div className="flex mt-2">
                  <UploaderBtn>选择文件</UploaderBtn>
                  <UploaderBtn directory={true}>选择文件夹</UploaderBtn>
                </div>
              </>
            </UploaderDrop>
            <UploaderList fileList={fileList}>
              {() => (
                <>
                  {fileList.map((file) => (
                    <UploaderFile file={file} list={true} key={file.id}>
                      {({
                        name,
                        size,
                        averageSpeed,
                        pause,
                        retry,
                        remove,
                        resume,
                        formatedTimeRemaining,
                        error,
                        isComplete,
                        isUploading,
                        paused,
                        status,
                        statusText,
                        progress,
                        fileCategory
                      }) => (
                        <div className="uploader-file flex ">
                          <span className="flex-1">{fileCategory}</span>
                          <span className="flex-1">{name}</span>
                          <span className="flex-1">{size}</span>
                          <span className="flex-1">
                            {isUploading ? (
                              <>
                                <span>{Math.floor(progress * 100) + '%'}</span>
                                <span className="mx-3">{averageSpeed}</span>
                                <span>{formatedTimeRemaining}</span>
                              </>
                            ) : (
                              statusText
                            )}
                          </span>
                          {isUploading && (
                            <div className="flex-1 flex items-center justify-center ">
                              <Space>
                                <PauseOutlined onClick={pause} />
                                <CloseOutlined onClick={remove} />
                              </Space>
                            </div>
                          )}
                          {error && (
                            <span
                              className="flex-1 flex items-center justify-center "
                              onClick={retry}
                            >
                              <ReloadOutlined />
                            </span>
                          )}
                          {paused && (
                            <span
                              className="flex-1 flex items-center justify-center "
                              onClick={resume}
                            >
                              <CaretRightOutlined />
                            </span>
                          )}
                        </div>
                      )}
                    </UploaderFile>
                  ))}
                </>
              )}
            </UploaderList>
          </>
        )}
      </Uploader>
    </>
  );
};
