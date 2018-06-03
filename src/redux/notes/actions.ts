import {INote} from '@models';
import {action} from 'typesafe-actions';
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

export const updateNote = (note: INote) => action(types.UPDATE_NOTE, note);

export const addNote = (note: INote) => action(types.ADD_NOTE, note);
export const updateNoteId = (noteId: any, newId: any) =>
  action(types.UPDATE_NOTE_ID, {noteId, newId});

export const deleteNote = (note: INote, id?: any) =>
  action(types.DELETE_NOTE, {note, id});
