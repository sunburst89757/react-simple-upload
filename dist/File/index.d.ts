/// <reference types="react" />
import { UploaderFile as File } from 'simple-uploader.js';
import './index.scss';
interface IProps {
    file: File;
    list?: boolean;
}
export declare const UploaderFile: ({ file, list }: IProps) => JSX.Element;
export {};
