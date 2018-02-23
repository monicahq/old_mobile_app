import * as types from './types';

export function getContactsFetched() {
  return {
    type: types.GET_ALL_FETCHED,
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
