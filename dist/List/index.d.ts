/// <reference types="react" />
import { LibFile } from 'simple-uploader.js';
import './index.scss';
export declare const UploaderList: ({ fileList, children }: {
    fileList: LibFile[];
    children?: ((fileList: LibFile[]) => JSX.Element) | undefined;
}) => JSX.Element | null;
