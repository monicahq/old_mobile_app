import {connect} from 'react-redux';

import {navigate, back} from 'redux/router';
import {login} from 'redux/user';
import {Login} from './Login';

export const LoginScreen = connect(null, dispatch => {
  return {
    navigateSignup: () => dispatch(navigate('Signup')),
    navigateTabs: () => dispatch(navigate('Tabs')),
    back: () => dispatch(back()),
    login: (user, token) => dispatch(login(user, token)),
  };
})(Login);
