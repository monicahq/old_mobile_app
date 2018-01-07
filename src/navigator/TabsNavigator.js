import { TabNavigator } from 'react-navigation';

import { DashboardScreen } from '../pages/DashboardScreen';
import { ContactsScreen } from '../pages/ContactsScreen';


export const TabsNavigator = TabNavigator({
  Dashboard: {
    screen: DashboardScreen,
  },
  Contacts: {
    screen: ContactsScreen,
  },
}, {
  // tabBarPosition: 'top',
  // animationEnabled: true,
  // tabBarOptions: {
  //   activeTintColor: '#e91e63',
  // },
});
