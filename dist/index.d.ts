/// <reference types="react" />
import { UploaderAllEvents } from 'simple-uploader.js';
import './index.scss';
interface IProps extends UploaderAllEvents {
    options: UploaderOptions;
    fileStatusText?: Record<string, string>;
    autoStart?: Boolean;
}
interface UploaderOptions {
    target: string;
    testChunks: Boolean;
    [objkey: string]: any;
}
export default function Upload(props: IProps): JSX.Element;
export {};
