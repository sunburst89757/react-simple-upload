import { createContext } from 'react';
import Uploader, { UploaderFile } from 'simple-uploader.js';
export const UploaderContext = createContext<{
  uploader: Uploader | null;
  isSupport?: boolean;
}>({
  uploader: null,
  isSupport: true
});
