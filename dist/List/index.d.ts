/// <reference types="react" />
import { UploadFile } from 'simple-uploader.js';
import './index.scss';
export declare const UploaderList: ({ fileList, children }: {
    fileList: UploadFile[];
    children?: ((fileList: UploadFile[]) => JSX.Element) | undefined;
}) => JSX.Element | null;
