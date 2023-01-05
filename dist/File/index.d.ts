/// <reference types="react" />
import { UploadFile } from 'simple-uploader.js';
import './index.scss';
interface IProps {
    file: UploadFile;
    list?: boolean;
    children?: ({ error, paused }: {
        name: string;
        size: string;
        averageSpeed: string;
        error: boolean;
        paused: boolean;
        isComplete: boolean;
        isUploading: boolean;
        progress: number;
        formatedTimeRemaining: string;
        status: 'success' | 'error' | 'uploading' | 'paused' | 'waiting';
        statusText: string;
        fileCategory: string;
        pause: () => void;
        retry: () => void;
        resume: () => void;
        remove: () => void;
    }) => JSX.Element;
}
export declare const UploaderFile: ({ file, list, children }: IProps) => JSX.Element;
export {};
