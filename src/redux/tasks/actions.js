import * as types from './types';

export function getTasksByContactFetched(contactId) {
  return {
    type: types.GET_TASKS_BY_CONTACT_FETCHED,
    contactId,
  };
}

export function getTasksByContactSuccess(contactId, tasks) {
  return {
    type: types.GET_TASKS_BY_CONTACT_SUCCESS,
    tasks,
    contactId,
  };
}

export function getTasksByContactFailed(error) {
  return {
    type: types.GET_TASKS_BY_CONTACT_FAILED,
    error,
  };
}
