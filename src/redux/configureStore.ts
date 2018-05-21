import {applyMiddleware, compose, createStore} from 'redux';
import createDebounce from 'redux-debounced';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer, {IRootState} from './rootReducer';

const enhancers = [createDebounce(), thunk];

export default function configureStore(initialState?: IRootState) {
  const c: any = __DEV__ ? composeWithDevTools : compose;
  const enhancer = c(applyMiddleware(...enhancers));

  // TODO remove any
  return createStore(rootReducer, initialState! as any, enhancer);
}
