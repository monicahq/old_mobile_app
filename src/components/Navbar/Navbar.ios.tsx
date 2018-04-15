import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';

import {NetworkStatusContainer} from '@containers/NetworkStatus';
import {hitSlop, navbarColor, statusBarLightContent} from '@theme';
import {INavbarProps} from './Navbar.props';
import {styles} from './Navbar.styles';

export class Navbar extends PureComponent<INavbarProps> {
  public render() {
    const {onBack, title} = this.props;

    return [
      <NavigationBar
        key={0}
        leftButton={
          onBack && (
            <TouchableOpacity
              onPress={onBack}
              style={styles.leftButton}
              hitSlop={hitSlop}
            >
              <Icon name="ios-arrow-back" size={30} color="white" />
            </TouchableOpacity>
          )
        }
        rightButton={<NetworkStatusContainer />}
        title={typeof title === 'string' ? {title, tintColor: 'white'} : title}
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />,
    ];
  }
}
