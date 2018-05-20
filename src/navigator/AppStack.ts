import {createStackNavigator} from 'react-navigation';

import {ActivitiesScreen} from '@src/pages/Activities/ActivitiesScreen';
import {AddContactScreen} from '@src/pages/AddContactScreen';
import {CallsScreen} from '@src/pages/Calls/CallsScreen';
import {ContactScreen} from '@src/pages/Contact/ContactScreen';
import {DebtsScreen} from '@src/pages/Debts/DebtsScreen';
import {GiftsScreen} from '@src/pages/Gifts/GiftsScreen';
import {NotesScreen} from '@src/pages/Notes/NotesScreen';
import {RemindersScreen} from '@src/pages/Reminders/RemindersScreen';
import {TasksScreen} from '@src/pages/Tasks/TasksScreen';
import {TabsNavigator} from './TabsNavigator';

export const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigator,
    },
    AddContact: {
      screen: AddContactScreen,
    },
    Contact: {
      screen: ContactScreen,
    },
    Activities: {
      screen: ActivitiesScreen,
    },
    Calls: {
      screen: CallsScreen,
    },
    Debts: {
      screen: DebtsScreen,
    },
    Gifts: {
      screen: GiftsScreen,
    },
    Notes: {
      screen: NotesScreen,
    },
    Reminders: {
      screen: RemindersScreen,
    },
    Tasks: {
      screen: TasksScreen,
    },
  },
  {
    navigationOptions: {header: null},
  }
);
