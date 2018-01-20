import {connect} from 'react-redux';

import {setState} from '../../redux/router';
import {login} from '../../redux/user';
import {InitialState} from './InitialState';

export const InitialStateContainer = connect(null, dispatch => ({
  setState: routerState => dispatch(setState(routerState)),
  login: (user, token) => dispatch(login(user, token)),
}))(InitialState);
