import {Component} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {tokenKey, userKey} from '../../storage-keys';
import {AppNavigator} from '../../navigator/AppNavigator';

export class InitialState extends Component {
  static propTypes = {
    setState: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  };
  componentWillMount() {
    const {setState, login} = this.props;
    Promise.all([
      AsyncStorage.getItem(tokenKey),
      AsyncStorage.getItem(userKey),
    ]).then(([token, user]) => {
      if (!token) {
        SplashScreen.hide();
        return;
      }
      setState(tabsState);
      login(user, token);
      setTimeout(() => {
        SplashScreen.hide();
      }, 400);
    });
  }
  render() {
    return null;
  }
}

const tabsState = AppNavigator.router.getStateForAction(
  {type: 'Navigation/NAVIGATE', routeName: 'Tabs'},
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Launch'),
  ),
);
