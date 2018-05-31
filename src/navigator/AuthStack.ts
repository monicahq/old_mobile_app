import {createStackNavigator} from 'react-navigation';

import {LaunchScreen} from '@src/pages/Auth/Launch/LaunchScreen';
import {LoginScreen} from '@src/pages/Auth/Login/LoginScreen';

export const AuthStack = createStackNavigator(
  {
    Launch: {
      screen: LaunchScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    navigationOptions: {header: null},
  }
);
