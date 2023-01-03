export interface UploaderFile {
  isFolder: boolean;
  name: string;
  isRoot: boolean;
  fileList: UploaderFile[];
  files: UploaderFile[];
}
export interface UploaderChunk {
  chunkSize: number;
  pendingRetry: boolean;
  retries: number;
  processedState: { err: any; res: string };
  processingResponse: boolean;
}
export type UploaderAllEvents = {
  onChange?: (e: Event) => void;
  onFilesSubmitted?: (
    files: UploaderFile[],
    fileList: UploaderFile[],
    e: Event
  ) => void;
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
  onFileComplete: (rootFile: UploaderFile) => void;
  onComplete: () => void;
  onFileAdded?: (file: UploaderFile) => void;
  onFilesAdded?: (files: UploaderFile[], fileList: UploaderFile[]) => {};
};
