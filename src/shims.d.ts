declare module 'simple-uploader.js' {
  class Uploader {
    support: boolean;
    aborted: boolean;
    allError: boolean;
    completed: boolean;
    error: boolean;
    fileStatusText: Record<string, any>;
    paused: boolean;
    file: UploaderFile;
    fileList: UploaderFile[];
    files: UploaderFile[];
    uploader: Uploader;
    assignBrowse: (node: HTMLElement) => void;
    assignDrop: (node: HTMLElement) => void;
    on: (watchEvent: string, cb: Function) => void;
    off: (watchEvent: string, cb: Function) => void;
    constructor(options: Record<string, any>) {}
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
    size: number;
    chunks: UploaderChunk[];
    [propKey: string]: any;
  }
  export interface UploaderChunk {
    chunkSize: number;
    pendingRetry: boolean;
    retries: number;
    processedState: { err: any; res: string };
    processingResponse: boolean;
    [propKey: string]: any;
  }
  export type UploaderAllEvents = {
    onChange?: (e: Event) => void;
    onFilesSubmitted?: (arr1: any[], arr2: any[], e: Event) => void;
    onFileProgress?: (
      file1: UploaderFile,
      file2: UploaderFile,
      chunk: UploaderChunk
    ) => void;
    onFileSuccess?: (
      file1: UploaderFile,
      file2: UploaderFile,
      status: string,
      chunk: UploaderChunk
    ) => void;
    onFileComplete: (file1: UploaderFile, file2: UploaderFile) => void;
    onComplete: () => void;
    onFileAdded?: (file: UploaderFile) => void;
    onFilesAdded?: (files: UploaderFile[], fileList: UploaderFile[]) => {};
  };
}
