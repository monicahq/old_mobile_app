import {connect} from 'react-redux';

import {getContacts, searchContacts} from 'redux/contacts';
import {navigate} from 'redux/router';
import {Contacts} from './Contacts';

export const ContactsScreen = connect(
  state => ({
    contacts: state.contacts,
    list: state.getAllContacts.items,
    isFetching: state.getAllContacts.isFetching,
    fetchedPageCount: state.getAllContacts.fetchedPageCount,
    count: state.getAllContacts.count,
  }),
  dispatch => {
    return {
      getContacts: shouldInvalidate => dispatch(getContacts(shouldInvalidate)),
      searchContacts: (query, shouldInvalidate) =>
        dispatch(searchContacts(query, shouldInvalidate)),
      navigateToContact: contactId => () =>
        dispatch(navigate('Contact', contactId)),
    };
  },
)(Contacts);
