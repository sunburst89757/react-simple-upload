declare module 'simple-uploader.js' {
  interface Option {
    target: string;
    singleFile?: boolean;
    chunkSize?: number;
    forceChunkSize?: boolean;
    simultaneousUploads?: number;
    fileParameterName?: string;
    query?: Record<string, any>;
    headers?: Record<string, any>;
    withCredentials?: boolean;
    method?: 'multipart' | 'octet';
    allowDuplicateUploads?: boolean;
    prioritizeFirstAndLastChunk?: boolean;
    testChunks?: boolean;
    maxChunkRetries?: number;
    chunkRetryInterval?: number | null;
    progressCallbacksInterval?: number;
    categoryMap?: Record<string, string[]>;
    parseTimeRemaining?: (
      timeRemaining: number,
      parsedTimeRemaining: string
    ) => string;
  }
  class Uploader {
    support: boolean;
    aborted: boolean;
    allError: boolean;
    completed: boolean;
    error: boolean;
    fileStatusText: Record<string, string>;
    paused: boolean;
    file: UploaderFile;
    fileList: UploaderFile[];
    files: UploaderFile[];
    opts: Option;
    uploader: Uploader;
    assignBrowse: (
      node: HTMLElement,
      isDirectory?: boolean,
      singleFile?: boolean,
      attributes?: string
    ) => void;
    assignDrop: (node: HTMLElement) => void;
    unAssignDrop: (node: HTMLElement) => void;
    on: (watchEvent: string, cb: Function) => void;
    off: (watchEvent: string, cb: Function) => void;
    upload: () => void;
    constructor(options: Record<string, any>) {}
    static utils: {
      formatSize: (number) => number;
    };
  }
  export default Uploader;
  export interface UploaderFile {
    aborted: boolean;
    allError: boolean;
    completed: boolean;
    error: boolean;
    fileType: string;
    id: number;
    isFolder: boolean;
    name: string;
    paused: boolean;
    averageSpeed: number;
    currentSpeed: number;
    size: number;
    chunks: UploaderChunk[];
    isComplete: () => boolean;
    isUploading: () => boolean;
    sizeUploaded: () => number;
    progress: () => number;
    timeRemaining: () => number;
    pause: () => void;
    resume: () => void;
    cancel: () => void;
    retry: () => void;
    getType: () => string;
    getExtension: () => string;
    getFormatSize: () => string;
    uploader: Uploader;
    file: File;
  }
  export interface UploaderChunk {
    chunkSize: number;
    pendingRetry: boolean;
    retries: number;
    processedState: { err: any; res: string };
    processingResponse: boolean;
  }
 
}
