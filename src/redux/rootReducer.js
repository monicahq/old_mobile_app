import {combineReducers} from 'redux';

import router from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';

const rootReducer = combineReducers({
  router,
  user: userReducer,
  token: tokenReducer,
});

export default rootReducer;
