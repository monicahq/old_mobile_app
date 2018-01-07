
import React from 'react';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import { AppNavigator } from './navigator/AppNavigator';
import configureStore from './redux/configureStore';

const store = configureStore();

const CustomAppNavigator = ({ dispatch, router, initReduxRouter }) => (
    <AppNavigator navigation={addNavigationHelpers({
        dispatch,
        state: router,
    })} />
);

const AppWithNavigationState = connect((state) => ({
    router: state.router
}))(CustomAppNavigator);


export const App = () => (
    <Provider store={store}>
        <AppWithNavigationState />
    </Provider>
);
