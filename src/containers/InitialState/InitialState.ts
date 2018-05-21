import {PureComponent} from 'react';
import {AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  IBetaSubscribeOperation,
  IContactsGetOperation,
  IUserSetTokenOperation,
} from '@models/operations';
import {INavigateAction} from '@navigator/NavigationService';
import {betaKey, tokenKey} from '@src/storage-keys';

interface IInitialStateProps {
  navigate: INavigateAction;
  subscribeBeta: IBetaSubscribeOperation;
  setToken: IUserSetTokenOperation;
  getContacts: IContactsGetOperation;
}

export class InitialState extends PureComponent<IInitialStateProps, {}> {
  public async componentWillMount() {
    const {setToken, getContacts, subscribeBeta, navigate} = this.props;

    try {
      const [token, beta] = await Promise.all([
        AsyncStorage.getItem(tokenKey),
        AsyncStorage.getItem(betaKey),
      ]);
      // Subscribe to beta
      subscribeBeta(!!beta);

      if (!token) {
        SplashScreen.hide();
        navigate('Auth');
        return;
      }
      setToken(token);
      getContacts();
      SplashScreen.hide();
      navigate('App');
    } catch (e) {
      return;
    }
  }
  public render() {
    return null;
  }
}
