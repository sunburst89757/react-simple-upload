import { UploaderFile as File } from 'simple-uploader.js';
import './index.scss';
interface IProps {
  file: File;
  list?: boolean;
}
export const UploaderFile = ({ file, list = false }: IProps) => {
  return <div>{file.name}</div>;
};
