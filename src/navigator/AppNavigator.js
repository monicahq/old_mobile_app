import {
  StackRouter,
  createNavigationContainer,
  createNavigator,
} from 'react-navigation';

import {StackNavigatorAnimation} from './StackNavigatorAnimation';

import {LaunchScreen} from '../pages/LaunchScreen';
import {LoginScreen} from '../pages/LoginScreen';
import {TabsNavigator} from './TabsNavigator';

const Router = StackRouter({
  Launch: {screen: LaunchScreen},
  Login: {screen: LoginScreen},
  Tabs: {screen: TabsNavigator},
});

export const AppNavigator = createNavigationContainer(
  createNavigator(Router)(StackNavigatorAnimation),
);
