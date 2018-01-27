import React from 'react';
import PropTypes from 'prop-types';
import {Provider, connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

import {AppNavigator} from 'navigator/AppNavigator';
import configureStore from 'redux/configureStore';
import {InitialStateContainer} from 'containers/InitialState/InitialStateContainer';
import {CodePushContainer} from 'containers/CodePush/CodePushContainer';
import {codePush} from './CodePush';

const store = configureStore();

const CustomAppNavigator = ({dispatch, router}) => [
  <AppNavigator
    key={0}
    navigation={addNavigationHelpers({
      dispatch,
      state: router,
    })}
  />,
  <InitialStateContainer key={1} />,
  <CodePushContainer key={2} />,
];
CustomAppNavigator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

const AppWithNavigationState = connect(state => ({
  router: state.router,
}))(CustomAppNavigator);

export const App = codePush(() => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
));
