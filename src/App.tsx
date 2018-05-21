import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

import configureStore from '@redux/configureStore';
import {CodePushContainer} from '@src/containers/CodePush/CodePushContainer';
import {AppNavigator} from '@src/navigator/AppNavigator';
import {codePush} from './CodePush';

const store = configureStore();

class MainApp extends PureComponent<{}, {}> {
  public render() {
    return [<AppNavigator key={0} />, <CodePushContainer key={1} />];
  }
}

class AppWithoutCodePush extends PureComponent<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}

export const App = codePush(AppWithoutCodePush);
