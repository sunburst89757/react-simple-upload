import { createContext } from 'react';
import Uploader, { LibFile } from 'simple-uploader.js';
export const UploaderContext = createContext<{
  uploader: Uploader | null;
  isSupport?: boolean;
}>({
  uploader: null,
  isSupport: true
});
