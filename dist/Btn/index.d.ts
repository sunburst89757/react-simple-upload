/// <reference types="react" />
import './index.scss';
interface BtnProps {
    children: JSX.Element | string;
    directory?: boolean;
    single?: boolean;
    attributes?: string;
}
export declare const UploaderBtn: ({ children, directory, single, attributes }: BtnProps) => JSX.Element;
export {};
