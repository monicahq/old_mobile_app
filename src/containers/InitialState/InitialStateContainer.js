import {connect} from 'react-redux';

import {setState} from 'redux/router';
import {setToken} from 'redux/user';
import {getContacts} from 'redux/contacts';
import {subscribeBeta} from 'redux/beta';
import {InitialState} from './InitialState';

export const InitialStateContainer = connect(null, dispatch => ({
  setState: routerState => dispatch(setState(routerState)),
  setToken: token => dispatch(setToken(token)),
  getContacts: () => dispatch(getContacts()),
  subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
}))(InitialState);
