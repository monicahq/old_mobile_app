import * as types from './types';

export function getNotesByContactFetched() {
  return {
    type: types.GET_NOTES_BY_CONTACT_FETCHED,
  };
}

export function getNotesByContactSuccess(contactId, notes) {
  return {
    type: types.GET_NOTES_BY_CONTACT_SUCCESS,
    notes,
    contactId,
  };
}

export function getNotesByContactFailed(error) {
  return {
    type: types.GET_NOTES_BY_CONTACT_FAILED,
    error,
  };
}
