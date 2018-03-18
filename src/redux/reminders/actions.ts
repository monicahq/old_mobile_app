import {IReminder} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getRemindersByContactFetched = createAction(
  types.GET_REMINDERS_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_REMINDERS_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getRemindersByContactSuccess = createAction(
  types.GET_REMINDERS_BY_CONTACT_SUCCESS,
  (contactId: number, reminders: IReminder[]) => ({
    type: types.GET_REMINDERS_BY_CONTACT_SUCCESS,
    reminders,
    contactId,
  })
);

export const getRemindersByContactFailed = createAction(
  types.GET_REMINDERS_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_REMINDERS_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getRemindersByContactFetched,
  getRemindersByContactSuccess,
  getRemindersByContactFailed,
].map($call);
export type IRemindersActions = typeof actions[number];
