export interface UploadFile {
  isFolder: boolean;
  name: string;
  isRoot: boolean;
  fileList: UploadFile[];
  files: UploadFile[];
}
export interface UploadChunk {
  chunkSize: number;
  pendingRetry: boolean;
  retries: number;
  processedState: { err: any; res: string };
  processingResponse: boolean;
}
export type UploaderAllEvents = {
  onChange?: (e: Event) => void;
  onFilesSubmitted?: (
    files: UploadFile[],
    fileList: UploadFile[],
    e: Event
  ) => void;
  onFileProgress?: (
    file1: UploadFile,
    file2: UploadFile,
    chunk: UploadChunk
  ) => void;
  onFileSuccess?: (
    file1: UploadFile,
    file2: UploadFile,
    status: string,
    chunk: UploadChunk
  ) => void;
  onFileComplete?: (rootFile: UploadFile) => void;
  onComplete?: () => void;
  onFileAdded?: (file: UploadFile) => void;
  onFilesAdded?: (files: UploadFile[], fileList: UploadFile[]) => {};
};
