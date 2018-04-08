import {IActivitiesActions} from '@redux/activities/actions';
import {IBetaActions} from '@redux/beta/actions';
import {ICallsActions} from '@redux/calls/actions';
import {IContactsActions} from '@redux/contacts/actions';
import {IDebtsActions} from '@redux/debts/actions';
import {IGiftsActions} from '@redux/gifts/actions';
import {INetworkActions} from '@redux/network/actions';
import {INotesActions} from '@redux/notes/actions';
import {IRemindersActions} from '@redux/reminders/actions';
import {IRouterActions} from '@redux/router/actions';
import {ITasksActions} from '@redux/tasks/actions';
import {IUserActions} from '@redux/user/actions';

export type IRootAction =
  | IBetaActions
  | IContactsActions
  | IUserActions
  | IRouterActions
  | IActivitiesActions
  | ICallsActions
  | IGiftsActions
  | INotesActions
  | IRemindersActions
  | ITasksActions
  | IDebtsActions
  | INetworkActions;
