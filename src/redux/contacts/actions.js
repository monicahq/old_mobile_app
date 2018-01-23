import * as types from './types';

export function getContactsFetched(shouldInvalidate) {
  return {
    type: types.GET_ALL_FETCHED,
    shouldInvalidate,
  };
}

export function getContactsSuccess(items, count) {
  return {
    type: types.GET_ALL_SUCCESS,
    items,
    count,
  };
}

export function getContactsFailed(error) {
  return {
    type: types.GET_ALL_FAILED,
    error,
  };
}
