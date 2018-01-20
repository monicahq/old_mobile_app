import {createStore, compose} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import rootReducer from './rootReducer';

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(__DEV__ ? devToolsEnhancer() : undefined),
  );
}
