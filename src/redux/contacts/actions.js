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

export function searchContactsFetched(query, shouldInvalidate) {
  return {
    type: types.SEARCH_FETCHED,
    query,
    shouldInvalidate,
  };
}

export function searchContactsSuccess(items, count) {
  return {
    type: types.SEARCH_SUCCESS,
    items,
    count,
  };
}

export function searchContactsFailed(error) {
  return {
    type: types.SEARCH_FAILED,
    error,
  };
}
