/// <reference types="react" />
import './index.css';
import { UploaderAllEvents } from './types';
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
