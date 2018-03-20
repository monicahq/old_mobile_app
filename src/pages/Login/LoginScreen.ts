import {connect} from 'react-redux';

import {back, navigate} from '@redux/router';
import {setToken} from '@redux/user';
import {Login} from './Login';

export const mapDispatchToProps = dispatch => {
  return {
    navigate: routeName => () => dispatch(navigate(routeName)),
    back: () => dispatch(back()),
    setToken: token => dispatch(setToken(token)),
  };
};

export const LoginScreen = connect(null, mapDispatchToProps)(Login);
