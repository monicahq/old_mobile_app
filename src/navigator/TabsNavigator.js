import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TabRouter,
  createNavigationContainer,
  createNavigator,
  addNavigationHelpers,
} from 'react-navigation';

import {Tabbar} from '../components/Tabbar/Tabbar';
import {DashboardScreen} from '../pages/DashboardScreen';
import {ContactsScreen} from '../pages/ContactsScreen';
import {JournalScreen} from '../pages/JournalScreen';
import {SettingsScreen} from '../pages/SettingsScreen';

const CustomTabView = ({router, navigation}) => {
  const {routes, index} = navigation.state;
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
  return (
    <View style={styles.flex}>
      <View style={styles.flex}>
        <ActiveScreen
          navigation={addNavigationHelpers({
            dispatch: navigation.dispatch,
            state: routes[index],
          })}
          screenProps={{}}
        />
      </View>
      <Tabbar navigation={navigation} />
    </View>
  );
};

const CustomTabRouter = TabRouter({
  Dashboard: {
    screen: DashboardScreen,
  },
  Contacts: {
    screen: ContactsScreen,
  },
  Journal: {
    screen: JournalScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

export const TabsNavigator = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView),
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
