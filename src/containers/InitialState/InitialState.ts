import {PureComponent} from 'react';
import {AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  IBetaSubscribeOperation,
  IContactsGetOperation,
  IRouterSetStateOperation,
  IUserSetTokenOperation,
} from '@models/operations';
import {AppNavigator} from '@src/navigator/AppNavigator';
import {betaKey, tokenKey} from '@src/storage-keys';

interface IInitialStateProps {
  setRouterState: IRouterSetStateOperation;
  subscribeBeta: IBetaSubscribeOperation;
  setToken: IUserSetTokenOperation;
  getContacts: IContactsGetOperation;
}

export class InitialState extends PureComponent<IInitialStateProps, {}> {
  public async componentWillMount() {
    const {setRouterState, setToken, getContacts, subscribeBeta} = this.props;

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
      setRouterState(dashboardState);
      setTimeout(() => {
        SplashScreen.hide();
      }, 400);
    } catch (e) {
      return;
    }
  }
  public render() {
    return null;
  }
}

const tabsState = AppNavigator.router.getStateForAction(
  {type: 'Navigation/NAVIGATE', routeName: 'Tabs'},
  AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Launch')
  )
);

const dashboardState = AppNavigator.router.getStateForAction(
  {type: 'Navigation/NAVIGATE', routeName: 'Contacts'},
  tabsState
);
