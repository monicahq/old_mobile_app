import React, {PureComponent} from 'react';
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import {I18n} from '@i18n';
import {ActionSheet} from '../../containers/ActionSheet';
import {FontelloIcon} from '../FontelloIcon';
import {activeTextColor, iconSize, styles, textColor} from './Tabbar.styles';

const Touchable =
  Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;

const routes = [
  // {
  //   name: I18n.t('common:dashboard'),
  //   routeName: 'Dashboard',
  //   icon: 'gauge',
  // },
  {
    name: I18n.t('contacts:contacts'),
    routeName: 'Contacts',
    icon: 'users',
  },
  {
    name: I18n.t('common:add'),
    icon: 'plus-circled',
  },
  // {
  //   name: I18n.t('common:journal'),
  //   routeName: 'Journal',
  //   icon: 'list',
  // },
  {
    name: I18n.t('common:settings'),
    routeName: 'Settings',
    icon: 'cog',
  },
];
const isActive = (route1, route2) => {
  return route1.routeName === route2.routeName;
};

interface ITabbarProps {
  // TODO
  navigation: NavigationScreenProp<NavigationState>;
}

export class Tabbar extends PureComponent<ITabbarProps> {
  private ActionSheet;

  public actionSheetRef = ref => (this.ActionSheet = ref);

  public onPress = routeName => () =>
    routeName
      ? this.props.navigation.navigate(routeName)
      : this.ActionSheet.getWrappedInstance().show();

  public render() {
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
                ]}
              >
                {route.name}
              </Text>
            </View>
          </Touchable>
        ))}
      </View>
    );
  }
}
