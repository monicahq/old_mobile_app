import {createStackNavigator} from 'react-navigation';

import {LaunchScreen} from '@src/pages/Launch/LaunchScreen';
import {LoginScreen} from '@src/pages/Login/LoginScreen';

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
