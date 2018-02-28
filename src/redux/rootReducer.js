import {combineReducers} from 'redux';

import {routerReducer} from './router/reducer';
import {userReducer, tokenReducer} from './user/reducer';
import {
  contactsReducer,
  getAllReducer,
  searchReducer,
} from './contacts/reducer';
import {betaReducer} from './beta/reducer';
import {
  getByContactReducer as getNotesByContactReducer,
  notesReducer,
} from './notes/reducer';
import {
  getByContactReducer as getDebtsByContactReducer,
  debtsReducer,
} from './debts/reducer';
import {
  getByContactReducer as getActivitiesByContactReducer,
  activitiesReducer,
} from './activities/reducer';
import {
  getByContactReducer as getCallsByContactReducer,
  callsReducer,
} from './calls/reducer';
import {
  getByContactReducer as getGiftsByContactReducer,
  giftsReducer,
} from './gifts/reducer';
import {
  getByContactReducer as getRemindersByContactReducer,
  remindersReducer,
} from './reminders/reducer';
import {
  getByContactReducer as getTasksByContactReducer,
  tasksReducer,
} from './tasks/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  token: tokenReducer,
  contacts: contactsReducer,
  getAllContacts: getAllReducer,
  searchContacts: searchReducer,
  beta: betaReducer,
  getNotesByContact: getNotesByContactReducer,
  notes: notesReducer,
  getDebtsByContact: getDebtsByContactReducer,
  debts: debtsReducer,
  getActivitiesByContact: getActivitiesByContactReducer,
  activities: activitiesReducer,
  getCallsByContact: getCallsByContactReducer,
  calls: callsReducer,
  getGiftsByContact: getGiftsByContactReducer,
  gifts: giftsReducer,
  getRemindersByContact: getRemindersByContactReducer,
  reminders: remindersReducer,
  getTasksByContact: getTasksByContactReducer,
  tasks: tasksReducer,
});

export default rootReducer;
