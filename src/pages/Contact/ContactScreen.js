import {connect} from 'react-redux';

import {Contact} from './Contact';
import {back, navigate} from 'redux/router';

export const ContactScreen = connect(
  (state, {navigation}) => ({
    contact: state.contacts[navigation.state.params],
  }),
  dispatch => ({
    back: () => dispatch(back()),
    navigate: (routeName, contactId) => () =>
      dispatch(navigate(routeName, contactId)),
  }),
)(Contact);
