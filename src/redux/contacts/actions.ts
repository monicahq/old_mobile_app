import {IContact} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

/**
 * Actions
 */

export const getContactsFetched = () => action(types.GET_ALL_FETCHED);

export const getContactsSuccess = (items: IContact[], count: number) =>
  action(types.GET_ALL_SUCCESS, {
    items,
    count,
  });

export const getContactsFailed = (error: Error) =>
  action(types.GET_ALL_FAILED, {
    error,
  });

export const searchContactsFetched = (query: string) =>
  action(types.SEARCH_FETCHED, {
    query,
  });

export const searchContactsSuccess = (items: IContact[], count: number) =>
  action(types.SEARCH_SUCCESS, {
    items,
    count,
  });

export const searchContactsFailed = (error: Error) =>
  action(types.SEARCH_FAILED, {
    error,
  });
