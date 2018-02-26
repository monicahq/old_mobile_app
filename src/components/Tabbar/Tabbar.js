import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {activeTextColor, iconSize, styles, textColor} from './Tabbar.styles';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {FontelloIcon} from '../FontelloIcon';

import {ActionSheet} from '../../containers/ActionSheet';

const Touchable =
  Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;

const routes = [
  {
    name: 'Dashboard',
    routeName: 'Dashboard',
    icon: 'gauge',
  },
  {
    name: 'Contacts',
    routeName: 'Contacts',
    icon: 'users',
  },
  {
    name: 'Add',
    icon: 'plus-circled',
  },
  {
    name: 'Journal',
    routeName: 'Journal',
    icon: 'list',
  },
  {
    name: 'Settings',
    routeName: 'Settings',
    icon: 'cog',
  },
];
const isActive = (route1, route2) => {
  return route1.routeName === route2.routeName;
};

export class Tabbar extends PureComponent {
  actionSheetRef = ref => (this.ActionSheet = ref);

  onPress = routeName => () =>
    routeName
      ? this.props.navigation.navigate(routeName)
      : this.ActionSheet.getWrappedInstance().show();

  render() {
    const {navigation} = this.props;
    const {routes: navigationRoutes, index} = navigation.state;
    const activeRoute = navigationRoutes[index];

    return (
      <View style={styles.tabContainer}>
        <ActionSheet ref={this.actionSheetRef} />

        {routes.map(route => (
          <Touchable onPress={this.onPress(route.routeName)} key={route.name}>
            <View style={styles.tab}>
              <FontelloIcon
                name={route.icon}
                size={iconSize}
                color={
                  isActive(route, activeRoute) ? activeTextColor : textColor
                }
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
  }
}

Tabbar.propTypes = {
  navigation: PropTypes.object.isRequired,
};
