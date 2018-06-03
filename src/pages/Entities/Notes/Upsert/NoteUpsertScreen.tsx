import {connect, Dispatch} from 'react-redux';
import {Action} from 'redux';

import {INote, IRootState} from '@models';
import {pop} from '@navigator/NavigationService';
import {updateNote} from '@redux/notes';
import {NoteUpsert} from './NoteUpsert';

export const mapStateToProps = (state: IRootState, {navigation}) => {
  const {contactId, noteId} = navigation.state.params;
  const note = state.notes[noteId];

  return {
    contactId,
    note,
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  {navigation}
) => ({
  pop,
  updateNote: (note: INote) => dispatch(updateNote(note)),
});

export const NoteUpsertScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteUpsert);
