import {
  ICall,
  IMetaStatistics,
  IPageCountByContact,
  IRootAction,
} from '@models';
import * as types from './types';

export interface ICallsState {
  [callId: number]: ICall;
}
export interface ICallsGetByContactState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: IPageCountByContact;
  statistics: IMetaStatistics;
}

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
  statistics: {},
};

export const callsReducer = (
  state: ICallsState = {},
  action: IRootAction
): ICallsState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_CALLS_BY_CONTACT_SUCCESS:
      const calls = {...state};
      action.payload.calls.forEach(item => {
        if (!calls[item.id]) {
          calls[item.id] = item;
        }
      });

      return calls;
  }

  return state;
};

export const getByContactReducer = (
  state: ICallsGetByContactState = getByContactInitialState,
  action: IRootAction
): ICallsGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_CALLS_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_CALLS_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
        statistics: action.payload.statistics,
      };

    case types.GET_CALLS_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
