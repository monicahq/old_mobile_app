import {combineReducers} from 'redux';

import {routerReducer} from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {
  contactsReducer,
  getAllReducer,
  searchReducer,
} from './contacts/reducer';
import {betaReducer} from './beta/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
  searchContacts: searchReducer,
  beta: betaReducer,
});

export default rootReducer;
