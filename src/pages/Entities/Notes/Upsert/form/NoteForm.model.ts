import {INote} from '@models';
import {ReactNode, RefObject} from 'react';

export interface IProps {
  onSuccess?: (values: IValues) => void;
  note?: INote;
  ref?: RefObject<ReactNode>;
}
export interface IValues {
  body: string;
  is_favorited: boolean;
}
