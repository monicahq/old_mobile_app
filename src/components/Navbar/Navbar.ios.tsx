import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {hitSlop, navbarColor, statusBarLightContent} from '@theme';
import {INavbarProps} from './Navbar.props';
import {styles} from './Navbar.styles';

import {NavbarIOSBack} from './back/NavbarIOSBack';

export class Navbar extends PureComponent<INavbarProps> {
  public render() {
    const {onBack, title} = this.props;

    return (
      <NavigationBar
        style={styles.navbar}
        rightButton={this.getRightButton()}
        leftButton={onBack && <NavbarIOSBack onPress={onBack} />}
        title={typeof title === 'string' ? {title, tintColor: 'white'} : title}
        tintColor={navbarColor}
        statusBar={statusBarLightContent}
      />
    );
  }
  private getRightButton() {
    const {rightAction, rightTitle, rightIcon} = this.props;
    if (!rightTitle && !rightIcon) {
      return null;
    }
    if (rightIcon) {
      return (
        <TouchableOpacity onPress={rightAction} hitSlop={hitSlop}>
          <Icon
            name={rightIcon}
            size={30}
            style={{position: 'relative', right: 3, top: 7}}
            color="white"
          />
        </TouchableOpacity>
      );
    }
    if (rightTitle) {
      return {
        title: rightTitle,
        handler: rightAction,
        tintColor: 'white',
      };
    }
  }
}
