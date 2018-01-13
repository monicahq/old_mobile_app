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

// TODO : remove this if using stackNavigatorAnimator
const noHeader = {
  navigationOptions: {header: null},
};

const CustomTabRouter = TabRouter({
  Dashboard: {
    screen: DashboardScreen,
    ...noHeader,
  },
  Contacts: {
    screen: ContactsScreen,
    ...noHeader,
  },
  Journal: {
    screen: JournalScreen,
    ...noHeader,
  },
  Settings: {
    screen: SettingsScreen,
    ...noHeader,
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
