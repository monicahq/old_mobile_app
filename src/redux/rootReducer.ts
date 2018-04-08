import {INetworkReducer, IRootAction} from '@models';
import {reducer as network} from 'react-native-offline';
import {NavigationState} from 'react-navigation';
import {combineReducers} from 'redux';

import {
  activitiesReducer,
  getByContactReducer as getActivitiesByContactReducer,
  IActivitiesGetByContactState,
  IActivitiesState,
} from './activities/reducer';
import {betaReducer, IBetaState} from './beta/reducer';
import {
  callsReducer,
  getByContactReducer as getCallsByContactReducer,
  ICallsGetByContactState,
  ICallsState,
} from './calls/reducer';
import {
  contactsReducer,
  getAllReducer,
  IContactsState,
  IGetAllContactsState,
  ISearchContactsState,
  searchReducer,
} from './contacts/reducer';
import {
  debtsReducer,
  getByContactReducer as getDebtsByContactReducer,
  IDebtsGetByContactState,
  IDebtsState,
} from './debts/reducer';
import {
  getByContactReducer as getGiftsByContactReducer,
  giftsReducer,
  IGiftsGetByContactState,
  IGiftsState,
} from './gifts/reducer';
import {INetworkQueueState, networkQueueReducer} from './network/reducer';
import {
  getByContactReducer as getNotesByContactReducer,
  INotesGetByContactState,
  INotesState,
  notesReducer,
} from './notes/reducer';
import {
  getByContactReducer as getRemindersByContactReducer,
  IRemindersGetByContactState,
  IRemindersState,
  remindersReducer,
} from './reminders/reducer';
import {routerReducer} from './router/reducer';
import {
  getByContactReducer as getTasksByContactReducer,
  ITasksGetByContactState,
  ITasksState,
  tasksReducer,
} from './tasks/reducer';
import {ITokenState, tokenReducer} from './user/reducer';
import {LOGOUT} from './user/types';

export interface IAppState {
  router: NavigationState;
  token: ITokenState;
  contacts: IContactsState;
  getAllContacts: IGetAllContactsState;
  searchContacts: ISearchContactsState;
  getNotesByContact: INotesGetByContactState;
  notes: INotesState;
  getDebtsByContact: IDebtsGetByContactState;
  debts: IDebtsState;
  getActivitiesByContact: IActivitiesGetByContactState;
  activities: IActivitiesState;
  getCallsByContact: ICallsGetByContactState;
  calls: ICallsState;
  getGiftsByContact: IGiftsGetByContactState;
  gifts: IGiftsState;
  getRemindersByContact: IRemindersGetByContactState;
  reminders: IRemindersState;
  getTasksByContact: ITasksGetByContactState;
  tasks: ITasksState;
  beta: IBetaState;
  network: INetworkReducer;
  networkQueue: INetworkQueueState;
}

const appReducer = combineReducers<IAppState>({
  router: routerReducer,
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
  network,
  networkQueue: networkQueueReducer,
});

const rootReducer = (state: IAppState, action: IRootAction) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
