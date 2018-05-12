import {INote} from '@models';
import {action, ActionsUnion} from 'typesafe-actions';
import * as types from './types';

export const getNotesByContactFetched = (contactId: number) =>
  action(types.GET_NOTES_BY_CONTACT_FETCHED, {
    contactId,
  });

export const getNotesByContactSuccess = (contactId: number, notes: INote[]) =>
  action(types.GET_NOTES_BY_CONTACT_SUCCESS, {
    notes,
    contactId,
  });

export const getNotesByContactFailed = (error: Error) =>
  action(types.GET_NOTES_BY_CONTACT_FAILED, {
    error,
  });
