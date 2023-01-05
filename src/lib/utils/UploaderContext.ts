import { createContext } from 'react';
import Uploader, { UploadFile } from 'simple-uploader.js';
export const UploaderContext = createContext<{
  uploader: Uploader | null;
  isSupport?: boolean;
}>({
  uploader: null,
  isSupport: true
});
