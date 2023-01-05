/// <reference types="react" />
import { UploadFile } from 'simple-uploader.js';
import { UploaderBtn } from './Btn';
import { UploaderDrop } from './Drop';
import { UploaderList } from './List';
import { UnSupport } from './UnSupport';
import { UploaderFile } from './File';
import './index.css';
import { UploaderAllEvents } from './types';
interface IProps extends UploaderAllEvents {
    options: UploaderOptions;
    fileStatusText?: Record<string, string>;
    autoStart?: Boolean;
    children?: ({ fileList }: {
        fileList: UploadFile[];
    }) => JSX.Element;
}
interface UploaderOptions {
    target: string;
    testChunks: Boolean;
    [objkey: string]: any;
}
export { UploaderBtn, UploaderDrop, UploaderList, UnSupport, UploaderFile };
export default function Upload(props: IProps): JSX.Element;
