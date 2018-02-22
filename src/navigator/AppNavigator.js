import {StackNavigator} from 'react-navigation';

import {LaunchScreen} from 'pages/Launch/LaunchScreen';
import {LoginScreen} from 'pages/Login/LoginScreen';
import {AddContactScreen} from 'pages/AddContactScreen';
import {ContactScreen} from 'pages/Contact/ContactScreen';
import {ActivitiesScreen} from 'pages/Activities/ActivitiesScreen';
import {CallsScreen} from 'pages/Calls/CallsScreen';
import {DebtsScreen} from 'pages/Debts/DebtsScreen';
import {GiftsScreen} from 'pages/Gifts/GiftsScreen';
import {NotesScreen} from 'pages/Notes/NotesScreen';
import {RemindersScreen} from 'pages/Reminders/RemindersScreen';
import {TasksScreen} from 'pages/Tasks/TasksScreen';
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
