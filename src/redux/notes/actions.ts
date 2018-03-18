import {INote} from '@models';
import {createAction} from 'typesafe-actions';
import {$call} from 'utility-types';
import * as types from './types';

export const getNotesByContactFetched = createAction(
  types.GET_NOTES_BY_CONTACT_FETCHED,
  (contactId: number) => ({
    type: types.GET_NOTES_BY_CONTACT_FETCHED,
    contactId,
  })
);

export const getNotesByContactSuccess = createAction(
  types.GET_NOTES_BY_CONTACT_SUCCESS,
  (contactId: number, notes: INote[]) => ({
    type: types.GET_NOTES_BY_CONTACT_SUCCESS,
    notes,
    contactId,
  })
);

export const getNotesByContactFailed = createAction(
  types.GET_NOTES_BY_CONTACT_FAILED,
  (error: Error) => ({
    type: types.GET_NOTES_BY_CONTACT_FAILED,
    error: true,
    payload: error,
  })
);

const actions = [
  getNotesByContactFetched,
  getNotesByContactSuccess,
  getNotesByContactFailed,
].map($call);
export type INotesActions = typeof actions[number];
