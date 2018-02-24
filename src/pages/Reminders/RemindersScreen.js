import {connect} from 'react-redux';

import {Reminders} from './Reminders';
import {back} from 'redux/router';
import {getRemindersByContact} from 'redux/reminders';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    reminders: (contact.reminders || []).map(
      reminderId => state.reminders[reminderId],
    ),
    isFetching: state.getRemindersByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getRemindersByContact: () =>
    dispatch(getRemindersByContact(navigation.state.params)),
});

export const RemindersScreen = connect(mapStateToProps, mapDispatchToProps)(
  Reminders,
);
