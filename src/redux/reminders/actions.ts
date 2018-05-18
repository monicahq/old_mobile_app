import {IReminder} from '@models';
import {action} from 'typesafe-actions';
import * as types from './types';

export const getRemindersByContactFetched = (contactId: number) =>
  action(types.GET_REMINDERS_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getRemindersByContactSuccess = (
  contactId: number,
  reminders: IReminder[]
) =>
  action(types.GET_REMINDERS_BY_CONTACT_SUCCESS, {
    reminders,
    contactId,
  });

export const getRemindersByContactFailed = (error: Error) =>
  action(types.GET_REMINDERS_BY_CONTACT_FAILED, {
    error,
  });
