import {IContact} from '@models';

export interface IDebt {
  id: number;
  amount: number;
  contact: IContact;
  in_debt: 'yes' | 'no';
  reason: string;
}
