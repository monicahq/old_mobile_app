import {StackNavigator} from 'react-navigation';

import {ActivitiesScreen} from '@src/pages/Activities/ActivitiesScreen';
import {AddContactScreen} from '@src/pages/AddContactScreen';
import {CallsScreen} from '@src/pages/Calls/CallsScreen';
import {ContactScreen} from '@src/pages/Contact/ContactScreen';
import {DebtsScreen} from '@src/pages/Debts/DebtsScreen';
import {GiftsScreen} from '@src/pages/Gifts/GiftsScreen';
import {LaunchScreen} from '@src/pages/Launch/LaunchScreen';
import {LoginScreen} from '@src/pages/Login/LoginScreen';
import {NotesScreen} from '@src/pages/Notes/NotesScreen';
import {RemindersScreen} from '@src/pages/Reminders/RemindersScreen';
import {TasksScreen} from '@src/pages/Tasks/TasksScreen';
import {TabsNavigator} from './TabsNavigator';

const noHeader = {header: null};
const noGestures = {gesturesEnabled: false};

export const AppNavigator = StackNavigator({
  Launch: {
    screen: LaunchScreen,
    navigationOptions: {...noHeader},
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {...noHeader},
  },
  Tabs: {
    screen: TabsNavigator,
    navigationOptions: {...noGestures},
  },
  AddContact: {
    screen: AddContactScreen,
    navigationOptions: {...noHeader},
  },
  Contact: {
    screen: ContactScreen,
    navigationOptions: {...noHeader},
  },
  Activities: {
    screen: ActivitiesScreen,
    navigationOptions: {...noHeader},
  },
  Calls: {
    screen: CallsScreen,
    navigationOptions: {...noHeader},
  },
  Debts: {
    screen: DebtsScreen,
    navigationOptions: {...noHeader},
  },
  Gifts: {
    screen: GiftsScreen,
    navigationOptions: {...noHeader},
  },
  Notes: {
    screen: NotesScreen,
    navigationOptions: {...noHeader},
  },
  Reminders: {
    screen: RemindersScreen,
    navigationOptions: {...noHeader},
  },
  Tasks: {
    screen: TasksScreen,
    navigationOptions: {...noHeader},
  },
});
