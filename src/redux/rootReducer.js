import {combineReducers} from 'redux';

import {routerReducer} from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {contactsReducer, getAllReducer} from './contacts/reducer';
import {betaReducer} from './beta/reducer';
import {
  getByContactReducer as getNotesByContactReducer,
  notesReducer,
} from './notes/reducer';
import {
  getByContactReducer as getDebtsByContactReducer,
  debtsReducer,
} from './debts/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
  beta: betaReducer,
  getNotesByContact: getNotesByContactReducer,
  notes: notesReducer,
  getDebtsByContact: getDebtsByContactReducer,
  debts: debtsReducer,
});

export default rootReducer;
