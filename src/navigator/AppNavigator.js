// import {
//   StackRouter,
//   createNavigationContainer,
//   createNavigator,
// } from 'react-navigation';
import {StackNavigator} from 'react-navigation';
// import {StackNavigatorAnimation} from './StackNavigatorAnimation';

import {LaunchScreen} from 'pages/Launch/LaunchScreen';
import {LoginScreen} from 'pages/Login/LoginScreen';
import {AddContactScreen} from 'pages/AddContactScreen';
import {ContactScreen} from 'pages/ContactScreen';
import {TabsNavigator} from './TabsNavigator';

// const Router = StackRouter({
//   Launch: {screen: LaunchScreen},
//   Login: {screen: LoginScreen},
//   AddContact: {screen: AddContactScreen},
//   Tabs: {screen: TabsNavigator},
// });

// export const AppNavigator = createNavigationContainer(
//   createNavigator(Router)(StackNavigatorAnimation),
// );

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
