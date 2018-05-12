export {IRootState} from '@redux/rootReducer';
export {IRootAction} from './actions';
export * from './contact';
export * from './activity';
export * from './call';
export * from './debt';
export * from './gift';
export * from './note';
export * from './reminder';
export * from './task';

export interface IPageCountByContact {
  [contactId: number]: number;
}

export interface IMetaStatistics {
  [year: string]: number;
}
