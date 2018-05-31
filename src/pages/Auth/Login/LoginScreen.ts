import {connect} from 'react-redux';

import {navigate, pop} from '@navigator/NavigationService';
import {setToken} from '@redux/user';
import {Login} from './Login';

export const mapDispatchToProps = dispatch => {
  return {
    navigate: routeName => () => navigate(routeName),
    navigateToAppStack: () => navigate('App'),
    pop,
    setToken: token => dispatch(setToken(token)),
  };
};

export const LoginScreen = connect(
  null,
  mapDispatchToProps
)(Login);
