import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {activeTextColor, iconSize, styles, textColor} from './Tabbar.styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ActionSheetContainer} from '../../containers/ActionSheetContainer';

const Touchable =
  Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;
const routes = [
  {
    name: 'Dashboard',
    routeName: 'Dashboard',
    icon: 'dashboard',
  },
  {
    name: 'Contacts',
    routeName: 'Contacts',
    icon: 'people',
  },
  {
    name: 'Add',
    icon: 'add',
  },
  {
    name: 'Journal',
    routeName: 'Journal',
    icon: 'list',
  },
  {
    name: 'Settings',
    routeName: 'Settings',
    icon: 'settings',
  },
];
const isActive = (route1, route2) => {
  return route1.routeName === route2.routeName;
};

export const Tabbar = ({navigation}) => {
  const {routes: navigationRoutes, index} = navigation.state;
  const activeRoute = navigationRoutes[index];

  return (
    <View style={styles.tabContainer}>
      <ActionSheetContainer ref={o => (this.ActionSheet = o)} />

      {routes.map(route => (
        <Touchable
          onPress={() =>
            route.routeName
              ? navigation.navigate(route.routeName)
              : this.ActionSheet.getWrappedInstance().show()
          }
          key={route.name}>
          <View style={styles.tab}>
            <Icon
              name={route.icon}
              size={iconSize}
              color={isActive(route, activeRoute) ? activeTextColor : textColor}
            />
            <Text
              style={[
                styles.text,
                isActive(route, activeRoute) ? styles.textActive : undefined,
              ]}>
              {route.name}
            </Text>
          </View>
        </Touchable>
      ))}
    </View>
  );
};
