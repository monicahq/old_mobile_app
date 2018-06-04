import {IContact, INote} from '@models';
import {ReactNode, RefObject} from 'react';

export interface IProps {
  onSuccess?: (values: IValues) => void;
  note?: INote;
  ref?: RefObject<ReactNode>;
  contact: IContact;
}
export interface IValues {
  contact: IContact;
  body: string;
  is_favorited: boolean;
}
