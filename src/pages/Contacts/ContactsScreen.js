import {connect} from 'react-redux';

import {getContacts} from 'redux/contacts';
import {navigate} from 'redux/router';
import {Contacts} from './Contacts';

export const ContactsScreen = connect(
  state => ({
    contacts: state.getAllContacts.items.map(item => state.contacts[item]),
    isFetching: state.getAllContacts.isFetching,
    count: state.getAllContacts.count,
  }),
  dispatch => {
    return {
      getContacts: () => dispatch(getContacts()),
      navigateToContact: contactId => () =>
        dispatch(navigate('Contact', contactId)),
    };
  },
)(Contacts);
