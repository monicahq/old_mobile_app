import {checkInternetAccess, offlineActionTypes} from 'react-native-offline';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {applyMiddleware, compose, createStore} from 'redux';
import createDebounce from 'redux-debounced';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer, {IAppState} from './rootReducer';

const rnNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const enhancers = [
  // createNetworkMiddleware(),
  createDebounce(),
  thunk,
  rnNavigationMiddleware,
];

export default function configureStore(callback: () => void) {
  const c: any = __DEV__ ? composeWithDevTools : compose; // TODO fix any
  const enhancer = c(applyMiddleware(...enhancers));

  const store = createStore(rootReducer, undefined, enhancer);

  checkInternetAccess(3000, 'qwdqiuwdiuqwdiu').then((isConnected: boolean) => {
    store.dispatch({
      type: offlineActionTypes.CONNECTION_CHANGE,
      payload: isConnected,
    });
    callback();
  });
  return store;
}
