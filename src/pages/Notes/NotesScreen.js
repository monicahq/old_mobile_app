import {connect} from 'react-redux';

import {Notes} from './Notes';
import {back} from 'redux/router';
import {getNotesByContact} from 'redux/notes';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    notes: (contact.notes || []).map(noteId => state.notes[noteId]),
    isFetching: state.getNotesByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getNotesByContact: () => dispatch(getNotesByContact(navigation.state.params)),
});

export const NotesScreen = connect(mapStateToProps, mapDispatchToProps)(Notes);
