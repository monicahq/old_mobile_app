import {IContact} from '@models';

export interface INote {
  id: number;
  created_at: string;
  body: string;
  contact: IContact;
  is_favorited: boolean;
}
