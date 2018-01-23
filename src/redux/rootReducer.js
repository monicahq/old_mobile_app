import {combineReducers} from 'redux';

import router from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {contactsReducer, getAllReducer} from './contacts/reducer';

const rootReducer = combineReducers({
  router,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
});

export default rootReducer;
