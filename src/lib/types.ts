export interface UploadFile {
  isFolder: boolean;
  name: string;
  isRoot: boolean;
  uniqueIdentifier: string;
  size: number;
  fileList: UploadFile[];
  files: UploadFile[];
  file: File;
}
export interface UploadChunk {
  chunkSize: number;
  pendingRetry: boolean;
  retries: number;
  processedState: { err: any; res: string };
  processingResponse: boolean;
}
export interface UploadeAllEvents {
  onChange?: (e: Event) => void;
  onFilesSubmitted?: (
    files: UploadFile[],
    fileList: UploadFile[],
    e: Event
  ) => void;
  onFileProgress?: (
    rootfile: UploadFile,
    file: UploadFile,
    chunk: UploadChunk
  ) => void;
  onFileSuccess?: (
    file1: UploadFile,
    file2: UploadFile,
    message: string,
    chunk: UploadChunk
  ) => void;
  onFileComplete?: (rootFile: UploadFile) => void;
  onComplete?: () => void;
  onFileAdded?: (file: UploadFile) => boolean;
  onFilesAdded?: (files: UploadFile[], fileList: UploadFile[]) => boolean;
  onFileRemove?: (file: UploadFile) => void;
  onFileRetry?: (
    rootFile: UploadFile,
    file: UploadFile,
    chunk: UploadChunk
  ) => void;
  onFileError?: (
    rootFile: UploadFile,
    file: UploadFile,
    message: string,
    chunk: UploadChunk
  ) => void;
}
