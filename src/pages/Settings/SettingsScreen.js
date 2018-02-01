import {connect} from 'react-redux';
import {logout} from 'redux/user';
import {goToLaunchScreen} from 'redux/router';
import {subscribeBeta} from 'redux/beta';

import {Settings} from './Settings';

export const SettingsScreen = connect(
  state => ({
    beta: state.beta.isSubscribed,
  }),
  dispatch => ({
    logout: () => dispatch(logout()),
    goToLaunchScreen: () => dispatch(goToLaunchScreen()),
    subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
  }),
)(Settings);
