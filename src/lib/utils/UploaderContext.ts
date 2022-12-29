import { createContext } from 'react';
import Uploader from 'simple-uploader.js';
export const UploaderContext = createContext<Uploader | null>(null);
