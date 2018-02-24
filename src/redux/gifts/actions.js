import * as types from './types';

export function getGiftsByContactFetched() {
  return {
    type: types.GET_GIFTS_BY_CONTACT_FETCHED,
  };
}

export function getGiftsByContactSuccess(contactId, gifts) {
  return {
    type: types.GET_GIFTS_BY_CONTACT_SUCCESS,
    gifts,
    contactId,
  };
}

export function getGiftsByContactFailed(error) {
  return {
    type: types.GET_GIFTS_BY_CONTACT_FAILED,
    error,
  };
}
