import {createBottomTabNavigator} from 'react-navigation';

import {Tabbar} from '../components/Tabbar/Tabbar';

import {ContactsScreen} from '@src/pages/Contacts/ContactsScreen';
// import {DashboardScreen} from '@src/pages/DashboardScreen';
// import {JournalScreen} from '@src/pages/JournalScreen';
import {SettingsScreen} from '@src/pages/Settings/SettingsScreen';

export const TabsNavigator = createBottomTabNavigator(
  {
    // Dashboard: {
    //   screen: DashboardScreen,
    // },
    Contacts: {
      screen: ContactsScreen,
    },
    // Journal: {
    //   screen: JournalScreen,
    // },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    tabBarComponent: Tabbar,
  }
);
