import * as types from './types';

export function getCallsByContactFetched(contactId) {
  return {
    type: types.GET_CALLS_BY_CONTACT_FETCHED,
    contactId,
  };
}

export function getCallsByContactSuccess(contactId, calls) {
  return {
    type: types.GET_CALLS_BY_CONTACT_SUCCESS,
    calls,
    contactId,
  };
}

export function getCallsByContactFailed(error) {
  return {
    type: types.GET_CALLS_BY_CONTACT_FAILED,
    error,
  };
}
