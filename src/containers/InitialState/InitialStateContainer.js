import {connect} from 'react-redux';

import {setState} from '../../redux/router';
import {setToken} from '../../redux/user';
import {InitialState} from './InitialState';

export const InitialStateContainer = connect(null, dispatch => ({
  setState: routerState => dispatch(setState(routerState)),
  setToken: token => dispatch(setToken(token)),
}))(InitialState);
