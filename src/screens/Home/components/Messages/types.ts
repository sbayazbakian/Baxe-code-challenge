import {ImageRequireSource} from 'react-native';

export interface IProps {
  messages: IMessage[];
}

interface IMessage {
  avatar: ImageRequireSource;
  from: string;
  message: string;
  hr: string;
}
