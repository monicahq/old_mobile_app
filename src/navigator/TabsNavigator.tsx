import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {
  addNavigationHelpers,
  createNavigationContainer,
  createNavigator,
  NavigationAction,
  NavigationRouter,
  NavigationScreenProp,
  NavigationStackScreenOptions,
  NavigationState,
  TabRouter,
} from 'react-navigation';

import {commonStyles} from '@theme';

import {Tabbar} from '@components/Tabbar/Tabbar';
import {ContactsScreen} from '@src/pages/Contacts/ContactsScreen';
import {DashboardScreen} from '@src/pages/DashboardScreen';
import {JournalScreen} from '@src/pages/JournalScreen';
import {SettingsScreen} from '@src/pages/Settings/SettingsScreen';

interface ICustomTabViewProps {
  navigation: NavigationScreenProp<NavigationState>;
  router: NavigationRouter<
    NavigationState,
    NavigationAction,
    NavigationStackScreenOptions
  >;
}

class CustomTabView extends PureComponent<ICustomTabViewProps, {}> {
  public render() {
    const {navigation, router} = this.props;
    const {routes, index} = navigation.state;
    const ActiveScreen = router.getComponentForRouteName(
      routes[index].routeName
    );
    return (
      <View style={commonStyles.flex}>
        <View style={[commonStyles.flex, commonStyles.bgWhite]}>
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
  }
}

const noHeader = {
  navigationOptions: {header: null},
};

const screens = {
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
};

const CustomTabRouter = TabRouter(screens as any, {}); // TODO remove any

export const TabsNavigator = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
);
