// import {connect} from 'react-redux';

// import {getNotesByContact} from '@redux/notes';
import {navigate, pop} from '@navigator/NavigationService';
import {NotesList} from './NotesList';

// export const mapStateToProps = (state, {navigation}) => {
//   const contact = state.contacts[navigation.state.params];
//   return {
//     notes: (contact.notes || [])
//       .filter((value, index, self) => self.indexOf(value) === index)
//       .map(noteId => state.notes[noteId]),
//     isFetching: state.getNotesByContact.isFetching,
//   };
// };

// export const mapDispatchToProps = (dispatch, {navigation}) => {
//   const contactId = navigation.state.params;
//   return {
//     pop,
//     navigateToAddNote: () => navigate('NoteUpsert', {contactId}),
//     navigateToNote: noteId => () => navigate('NoteUpsert', {noteId, contactId}),
//     getNotesByContact: () => dispatch(getNotesByContact(contactId)),
//   };
// };

// export const NotesListScreen = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NotesList);

import React, {PureComponent} from 'react';

import {Notes} from '@db/notes';
import {INote} from '@models';

export class NotesListScreen extends PureComponent<
  {navigation: any},
  {notes: INote[]; isFetching: boolean}
> {
  public state = {
    isFetching: true,
    notes: [],
  };
  private sub;

  public componentWillMount() {
    const {navigation} = this.props;
    this.sub = Notes.getByContact(navigation.state.params)(notes => {
      this.setState({notes, isFetching: false});
    });
  }

  public componentWillUnmount() {
    this.sub.cancel();
  }

  public navigateToNote = (noteId?: string) => () => {
    const {navigation} = this.props;
    const contactId = navigation.state.params;
    navigate('NoteUpsert', {contactId, noteId});
  };

  public render() {
    const {notes, isFetching} = this.state;
    return (
      <NotesList
        notes={notes}
        isFetching={isFetching}
        pop={pop}
        navigateToNote={this.navigateToNote}
      />
    );
  }
}
