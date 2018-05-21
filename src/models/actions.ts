import {ActionType} from 'typesafe-actions';

import * as activitiesActions from '@redux/activities/actions';
import * as betaActions from '@redux/beta/actions';
import * as callsActions from '@redux/calls/actions';

import * as contactsActions from '@redux/contacts/actions';
import * as debtsActions from '@redux/debts/actions';
import * as giftsActions from '@redux/gifts/actions';
import * as notesActions from '@redux/notes/actions';
import * as remindersActions from '@redux/reminders/actions';
import * as tasksActions from '@redux/tasks/actions';
import * as userActions from '@redux/user/actions';

const actions = {
  activitiesActions,
  betaActions,
  callsActions,
  contactsActions,
  debtsActions,
  giftsActions,
  notesActions,
  remindersActions,
  tasksActions,
  userActions,
};

export type IRootAction = ActionType<typeof actions>;
