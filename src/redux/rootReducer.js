import {combineReducers} from 'redux';

import {routerReducer} from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {contactsReducer, getAllReducer} from './contacts/reducer';
import {betaReducer} from './beta/reducer';
import {getByContactReducer, notesReducer} from './notes/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
  beta: betaReducer,
  getNotesByContact: getByContactReducer,
  notes: notesReducer,
});

export default rootReducer;
