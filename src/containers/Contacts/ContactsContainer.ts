import {IRootState} from '@redux/rootReducer';
import {connect} from 'react-redux';

import {getContacts, searchContacts} from '@redux/contacts';
import {Contacts} from './Contacts';

export const ContactsContainer = connect(
  (state: IRootState) => {
    const isSearching = state.searchContacts.query !== '';
    const obj = isSearching ? state.searchContacts : state.getAllContacts;

    return {
      isSearching,
      contacts: obj.items.map(item => state.contacts[item]),
      isFetching: obj.isFetching,
      count: obj.count,
    };
  },
  dispatch => {
    return {
      getContacts: () => dispatch(getContacts()),
      searchContacts: query => dispatch(searchContacts(query)),
    };
  }
)(Contacts);
