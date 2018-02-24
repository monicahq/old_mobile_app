import * as types from './types';

export function getRemindersByContactFetched() {
  return {
    type: types.GET_REMINDERS_BY_CONTACT_FETCHED,
  };
}

export function getRemindersByContactSuccess(contactId, reminders) {
  return {
    type: types.GET_REMINDERS_BY_CONTACT_SUCCESS,
    reminders,
    contactId,
  };
}

export function getRemindersByContactFailed(error) {
  return {
    type: types.GET_REMINDERS_BY_CONTACT_FAILED,
    error,
  };
}
