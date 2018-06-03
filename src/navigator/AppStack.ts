import {createStackNavigator} from 'react-navigation';

import {AddContactScreen} from '@src/pages/AddContactScreen';
import {ChooseContactsScreen} from '@src/pages/ChooseContacts/ChooseContactsScreen';
import {ContactScreen} from '@src/pages/Contact/ContactScreen';
import {ActivitiesListScreen} from '@src/pages/Entities/Activities/List/ActivitiesListScreen';
import {CallsListScreen} from '@src/pages/Entities/Calls/List/CallsListScreen';
import {DebtsListScreen} from '@src/pages/Entities/Debts/List/DebtsListScreen';
import {GiftsListScreen} from '@src/pages/Entities/Gifts/List/GiftsListScreen';
import {NotesListScreen} from '@src/pages/Entities/Notes/List/NotesListScreen';
import {NoteUpsertScreen} from '@src/pages/Entities/Notes/Upsert/NoteUpsertScreen';
import {RemindersListScreen} from '@src/pages/Entities/Reminders/List/RemindersListScreen';
import {TasksListScreen} from '@src/pages/Entities/Tasks/List/TasksListScreen';
import {TabsNavigator} from './TabsNavigator';

export const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigator,
    },
    AddContact: {
      screen: AddContactScreen,
    },
    ChooseContacts: {
      screen: ChooseContactsScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
    Activities: {
      screen: ActivitiesListScreen,
    },
    Calls: {
      screen: CallsListScreen,
    },
    Debts: {
      screen: DebtsListScreen,
    },
    Gifts: {
      screen: GiftsListScreen,
    },
    Notes: {
      screen: NotesListScreen,
    },
    NoteUpsert: {
      screen: NoteUpsertScreen,
    },
    Reminders: {
      screen: RemindersListScreen,
    },
    Tasks: {
      screen: TasksListScreen,
    },
  },
  {
    navigationOptions: {header: null},
  }
);
