import {INote, IPageCountByContact, IRootAction} from '@models';
import * as types from './types';

export interface INotesState {
  [noteId: number]: INote;
}
export interface INotesGetByContactState {
  error: Error;
  isFetching: boolean;
  lastUpdated: number;
  fetchedPageCount: IPageCountByContact;
}

const getByContactInitialState = {
  error: null,
  isFetching: false,
  lastUpdated: null,
  fetchedPageCount: {},
};

export const notesReducer = (
  state: INotesState = {},
  action: IRootAction
): INotesState => {
  switch (action.type) {
    // GET ALL SUCCESS
    case types.GET_NOTES_BY_CONTACT_SUCCESS:
      const notes = {...state};
      action.payload.notes.forEach(item => {
        if (!notes[item.id]) {
          notes[item.id] = item;
        }
      });

      return notes;
  }

  return state;
};

export const getByContactReducer = (
  state: INotesGetByContactState = getByContactInitialState,
  action: IRootAction
): INotesGetByContactState => {
  switch (action.type) {
    // GET ALL FETCHED
    case types.GET_NOTES_BY_CONTACT_FETCHED:
      return {
        ...state,
        error: null,
        isFetching: true,
        fetchedPageCount: {
          [action.payload.contactId]:
            (state.fetchedPageCount[action.payload.contactId] || 0) + 1,
        },
      };

    case types.GET_NOTES_BY_CONTACT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: +new Date(),
      };

    case types.GET_NOTES_BY_CONTACT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
  }

  return state;
};
