import {Component} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {tokenKey, betaKey} from 'storage-keys';
import {AppNavigator} from 'navigator/AppNavigator';

export class InitialState extends Component {
  static propTypes = {
    setState: PropTypes.func.isRequired,
    setToken: PropTypes.func.isRequired,
    subscribeBeta: PropTypes.func.isRequired,
    getContacts: PropTypes.func.isRequired,
  };
  async componentWillMount() {
    const {setState, setToken, getContacts, subscribeBeta} = this.props;

    try {
      const [token, beta] = await Promise.all([
        AsyncStorage.getItem(tokenKey),
        AsyncStorage.getItem(betaKey),
      ]);
      // Subscribe to beta
      subscribeBeta(!!beta);

      if (!token) {
        SplashScreen.hide();
        return;
      }
      setToken(token);
      getContacts();
      setState(settingsState);
      setTimeout(() => {
        SplashScreen.hide();
      }, 400);
    } catch (e) {}
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

// const contactsState = AppNavigator.router.getStateForAction(
//   {type: 'Navigation/NAVIGATE', routeName: 'Contacts'},
//   tabsState,
// );

const settingsState = AppNavigator.router.getStateForAction(
  {type: 'Navigation/NAVIGATE', routeName: 'Dashboard'},
  tabsState,
);
