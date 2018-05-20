import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getNotesByContact} from '@redux/notes';
import {Notes} from './Notes';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    notes: (contact.notes || []).map(noteId => state.notes[noteId]),
    isFetching: state.getNotesByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getNotesByContact: () => dispatch(getNotesByContact(navigation.state.params)),
});

export const NotesScreen = connect(mapStateToProps, mapDispatchToProps)(Notes);
