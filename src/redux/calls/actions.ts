import {ICall, IMetaStatistics} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getCallsByContactFetched = createAction(
  types.GET_CALLS_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_CALLS_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getCallsByContactSuccess = createAction(
  types.GET_CALLS_BY_CONTACT_SUCCESS,
  (contactId: number, calls: ICall[], statistics: IMetaStatistics) => ({
    type: types.GET_CALLS_BY_CONTACT_SUCCESS,
    calls,
    contactId,
    statistics,
  })
);

export const getCallsByContactFailed = createAction(
  types.GET_CALLS_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_CALLS_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getCallsByContactFetched,
  getCallsByContactSuccess,
  getCallsByContactFailed,
].map($call);
export type ICallsActions = typeof actions[number];
