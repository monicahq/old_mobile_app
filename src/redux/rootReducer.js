import {combineReducers} from 'redux';

import router from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {contactsReducer, getAllReducer} from './contacts/reducer';
import {betaReducer} from './beta/reducer';

const rootReducer = combineReducers({
  router,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
  beta: betaReducer,
});

export default rootReducer;
