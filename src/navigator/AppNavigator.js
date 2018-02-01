import {StackNavigator} from 'react-navigation';

import {LaunchScreen} from 'pages/Launch/LaunchScreen';
import {LoginScreen} from 'pages/Login/LoginScreen';
import {AddContactScreen} from 'pages/AddContactScreen';
import {ContactScreen} from 'pages/Contact/ContactScreen';
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
});
