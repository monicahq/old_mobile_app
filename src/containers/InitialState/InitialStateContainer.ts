import {connect, MapDispatchToProps} from 'react-redux';

import {navigate} from '@navigator/NavigationService';
import {subscribeBeta} from '@redux/beta';
import {getContacts} from '@redux/contacts';
import {setToken} from '@redux/user';
import {InitialState} from './InitialState';

export const InitialStateContainer = connect(
  null,
  // TODO
  (dispatch: MapDispatchToProps<any, void>) => ({
    navigate: routeName => navigate(routeName),
    setToken: token => dispatch(setToken(token)),
    getContacts: () => dispatch(getContacts()),
    subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
  })
)(InitialState);
