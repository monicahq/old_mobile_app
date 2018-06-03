import * as actions from './actions';

import {API} from '@api';
import {INote, IRootState} from '@models';

export type INotesGetByContactOperation = (contactId: number) => any;

export function getNotesByContact(contactId: number) {
  return async (dispatch, getState) => {
    const state: IRootState = getState();
    if (
      state.getNotesByContact.isFetching ||
      (state.contacts[contactId].notes &&
        state.contacts[contactId].statistics.number_of_notes <=
          state.contacts[contactId].notes.length)
    ) {
      return;
    }

    dispatch(actions.getNotesByContactFetched(contactId));

    try {
      const res = await API.Notes.getAllByContact(
        contactId,
        (state.getNotesByContact.fetchedPageCount[contactId] || 0) + 1
      );
      dispatch(actions.getNotesByContactSuccess(contactId, res.data));
    } catch (e) {
      dispatch(actions.getNotesByContactFailed(e));
    }
  };
}

export function updateNote(note: INote) {
  return async (dispatch, getState) => {
    const state: IRootState = getState();
    const oldNote = state.notes[note.id];

    dispatch(actions.updateNote(note));

    try {
      await API.Notes.update(note);
    } catch (e) {
      dispatch(actions.updateNote(oldNote));
    }
  };
}

export function postNote(note: INote) {
  return async (dispatch, getState) => {
    // const state: IRootState = getState();
    // const oldNote = state.notes[note.id];
    const randomId = 'temp-' + Math.random();
    dispatch(actions.addNote({...note, id: randomId} as any));

    try {
      const res = await API.Notes.post(note);
      dispatch(actions.updateNoteId(randomId, res.data.id));
    } catch (e) {
      dispatch(actions.deleteNote(note, randomId));
    }
  };
}
