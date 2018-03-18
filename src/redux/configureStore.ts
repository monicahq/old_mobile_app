import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
import {applyMiddleware, compose, createStore} from 'redux';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';

import rootReducer, {IAppState} from './rootReducer';

const rnNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const enhancers = [createDebounce(), thunk, rnNavigationMiddleware];

export default function configureStore(initialState?: IAppState) {
  const enhancer = compose(applyMiddleware(...enhancers));

  return createStore(rootReducer, initialState!, enhancer);
}
