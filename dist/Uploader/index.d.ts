/// <reference types="react" />
import { LibFile } from 'simple-uploader.js';
import './index.css';
import { UploadChunk, UploadeAllEvents } from '../types';
interface Props extends UploadeAllEvents {
    options: UploadeOptions;
    fileStatusText?: Record<string, string>;
    autoStart?: boolean;
    children?: ({ fileList }: {
        fileList: LibFile[];
    }) => JSX.Element;
}
interface UploadeOptions {
    target: string;
    singleFile?: boolean;
    chunkSize?: number;
    forceChunkSize?: boolean;
    simultaneousUploads?: number;
    fileParameterName?: string;
    query?: Record<string, any> | ((...args: any[]) => any);
    headers?: Record<string, any> | ((...args: any[]) => any);
    method?: 'multipart' | 'octet';
    allowDuplicateUploads?: boolean;
    prioritizeFirstAndLastChunk?: boolean;
    testChunks: boolean;
    checkChunkUploadedByResponse?: (chunk: UploadChunk, message: string) => {};
    generateUniqueIdentifier?: () => string | null;
    parseTimeRemaining?: (timeRemaining: number, parsedTimeRemaining: string) => string;
    categoryMap?: Record<string, string[]>;
    maxChunkRetries?: number;
    chunkRetryInterval?: number | null;
    progressCallbacksInterval?: number;
    speedSmoothingFactor?: number;
    successStatuses?: number[];
    permanentErrors?: number[];
    initialPaused?: boolean;
}
export declare function Upload(props: Props): JSX.Element;
export {};
