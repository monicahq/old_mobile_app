import {connect} from 'react-redux';

import {navigate, pop} from '@navigator/NavigationService';
import {getNotesByContact} from '@redux/notes';
import {NotesList} from './NotesList';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    notes: (contact.notes || []).map(noteId => state.notes[noteId]),
    isFetching: state.getNotesByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => {
  const contactId = navigation.state.params;
  return {
    pop,
    navigateToNote: noteId => () => navigate('NoteUpsert', {noteId, contactId}),
    getNotesByContact: () => dispatch(getNotesByContact(contactId)),
  };
};

export const NotesListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList);
