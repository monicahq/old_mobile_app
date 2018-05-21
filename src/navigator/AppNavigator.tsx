import React, {Component} from 'react';
import {createSwitchNavigator} from 'react-navigation';

import {InitialStateContainer} from '@src/containers/InitialState/InitialStateContainer';
import {setTopLevelNavigator} from './NavigationService';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: {
      screen: InitialStateContainer,
    },
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export class AppNavigator extends Component {
  public render() {
    return (
      <SwitchNavigator
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
