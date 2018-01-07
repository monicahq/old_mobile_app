// import React from 'react';
import { StackRouter, createNavigationContainer, createNavigator, StackNavigator } from 'react-navigation';

import { StackNavigatorAnimation } from './StackNavigatorAnimation';

import { LaunchScreen } from '../pages/LaunchScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { TabsNavigator } from './TabsNavigator';

const Router = StackRouter({
  Launch: { screen: LaunchScreen },
  Login: { screen: LoginScreen },
  Tabs: { screen: TabsNavigator },
});

export const AppNavigator = createNavigationContainer(
  createNavigator(Router)(StackNavigatorAnimation)
);
// export const AppNavigator = StackNavigator({
//   Launch: { screen: LaunchScreen },
//   Login: { screen: LoginScreen },
//   Tabs: { screen: TabsNavigator },
// });
