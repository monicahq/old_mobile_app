import {IAppState} from '@models';
import {ActionCreator} from 'react-redux';

export {IAppState} from '@redux/rootReducer';
export {IRootAction} from './actions';
export * from './contact';
export * from './activity';
export * from './call';
export * from './debt';
export * from './gift';
export * from './note';
export * from './reminder';
export * from './task';
export * from './network';

export interface IPageCountByContact {
  [contactId: number]: number;
}

export interface IMetaStatistics {
  [year: string]: number;
}

export interface IThunk {
  (dispatch: ActionCreator<any>, getState: () => IAppState): Promise<void>;
  // interceptInOffline?: boolean;
  meta?: {
    debounce?: {
      time: number;
      key: string;
    };
    /** By passing true, your thunk will be enqueued on offline mode */
    // retry?: boolean;
  };
}
