import {connect, MapDispatchToProps} from 'react-redux';
import {Action} from 'redux';

import {INote, IRootState} from '@models';
import {pop} from '@navigator/NavigationService';
import {postNote, updateNote} from '@redux/notes';
import {NoteUpsert} from './NoteUpsert';

export const mapStateToProps = (state: IRootState, {navigation}) => {
  const params = navigation.state.params || {};
  const {contactId, noteId} = params;
  const note = state.notes[noteId];
  const contact = state.contacts[contactId];

  return {
    contact,
    note,
  };
};

export const mapDispatchToProps = (
  // TODO
  dispatch: MapDispatchToProps<any, void>
) => ({
  pop,
  updateNote: (note: INote) => dispatch(updateNote(note)),
  postNote: (note: INote) => dispatch(postNote(note)),
});

export const NoteUpsertScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteUpsert);
