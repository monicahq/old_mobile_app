import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';

import {subscribeBeta} from '@redux/beta';
import {getContacts} from '@redux/contacts';
import {setState} from '@redux/router';
import {setToken} from '@redux/user';
import {InitialState} from './InitialState';

export const InitialStateContainer = connect(
  null,
  (dispatch: Dispatch<Action>) => ({
    setRouterState: routerState => dispatch(setState(routerState)),
    setToken: token => dispatch(setToken(token)),
    getContacts: () => dispatch(getContacts()),
    subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
  })
)(InitialState);
