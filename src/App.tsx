import React, {PureComponent} from 'react';
import {
  addNavigationHelpers,
  NavigationDispatch,
  NavigationState,
} from 'react-navigation';
import {createReduxBoundAddListener} from 'react-navigation-redux-helpers';
import {connect, Provider} from 'react-redux';

import {IRootState} from '@models';
import configureStore from '@redux/configureStore';
import {CodePushContainer} from '@src/containers/CodePush/CodePushContainer';
import {InitialStateContainer} from '@src/containers/InitialState/InitialStateContainer';
import {AppNavigator} from '@src/navigator/AppNavigator';
import {codePush} from './CodePush';

const store = configureStore();
const addListener = createReduxBoundAddListener('root');

interface ICustomAppNavigatorProps extends React.Props<CustomAppNavigator> {
  dispatch: NavigationDispatch;
  router: NavigationState;
}

class CustomAppNavigator extends PureComponent<ICustomAppNavigatorProps, {}> {
  public render() {
    const {dispatch, router} = this.props;

    return [
      <AppNavigator
        key={0}
        navigation={addNavigationHelpers({
          dispatch,
          state: router,
          addListener,
        })}
      />,
      <InitialStateContainer key={1} />,
      <CodePushContainer key={2} />,
    ];
  }
}

const AppWithNavigationState = connect((state: IRootState) => ({
  router: state.router,
}))(CustomAppNavigator as any);

class AppWithoutCodePush extends PureComponent<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export const App = codePush(AppWithoutCodePush);
