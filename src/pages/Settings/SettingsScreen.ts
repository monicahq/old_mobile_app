import {navigate} from '@navigator/NavigationService';
import {subscribeBeta} from '@redux/beta';
import {logout} from '@redux/user';
import {connect} from 'react-redux';

import {Settings} from './Settings';

export const mapStateToProps = state => ({
  beta: state.beta.isSubscribed,
});

export const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  goToLaunchScreen: () => navigate('Auth'),
  subscribeBeta: isSubscribed => dispatch(subscribeBeta(isSubscribed)),
});

export const SettingsScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
