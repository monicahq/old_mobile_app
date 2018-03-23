import {IContact} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

/**
 * Actions
 */

export const getContactsFetched = createAction(types.GET_ALL_FETCHED);

export const getContactsSuccess = createAction(
  types.GET_ALL_SUCCESS,
  (items: IContact[], count: number) => ({
    type: types.GET_ALL_SUCCESS,
    items,
    count,
  })
);

export const getContactsFailed = createAction(
  types.GET_ALL_FAILED,
  (error: Error) => ({
    type: types.GET_ALL_FAILED,
    error: true,
    payload: error,
  })
);

export const searchContactsFetched = createAction(
  types.SEARCH_FETCHED,
  (query: string) => ({
    type: types.SEARCH_FETCHED,
    query,
  })
);

export const searchContactsSuccess = createAction(
  types.SEARCH_SUCCESS,
  (items: IContact[], count: number) => ({
    type: types.SEARCH_SUCCESS,
    items,
    count,
  })
);

export const searchContactsFailed = createAction(
  types.SEARCH_FAILED,
  (error: Error) => ({
    type: types.SEARCH_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getContactsFetched,
  getContactsSuccess,
  getContactsFailed,
  searchContactsFetched,
  searchContactsSuccess,
  searchContactsFailed,
].map($call);
export type IContactsActions = typeof actions[number];
