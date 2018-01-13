import {connect} from 'react-redux';

import {navigate, back} from '../redux/router';
import {Login} from '../components/Login/Login';

export const LoginScreen = connect(null, dispatch => {
  return {
    navigate: routeName => dispatch(navigate(routeName)),
    back: () => dispatch(back()),
  };
})(Login);
