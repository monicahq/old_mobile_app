import {connect} from 'react-redux';

import {navigate} from 'redux/router';
import {Launch} from './Launch';

export const LaunchScreen = connect(null, dispatch => {
  return {
    navigateLogin: () => dispatch(navigate('Login')),
    navigateSignup: () => dispatch(navigate('Signup')),
  };
})(Launch);
