import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import rootReducer from './rootReducer';

const rnNavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export default function configureStore() {
  return createStore(
    rootReducer,
    __DEV__
      ? compose(
          applyMiddleware(thunk),
          applyMiddleware(rnNavigationMiddleware),
          devToolsEnhancer(),
        )
      : compose(
          applyMiddleware(thunk),
          applyMiddleware(rnNavigationMiddleware),
        ),
  );
}
