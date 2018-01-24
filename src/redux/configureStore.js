import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {devToolsEnhancer} from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    __DEV__
      ? compose(applyMiddleware(thunk), devToolsEnhancer())
      : applyMiddleware(thunk),
  );
}
