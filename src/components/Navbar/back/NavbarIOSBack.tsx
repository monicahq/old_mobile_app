import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {hitSlop} from '@theme';
import {styles} from './NavbarIOSBack.styles';

interface INavbarIOSBackProps {
  onPress: (...args) => any;
}

export class NavbarIOSBack extends PureComponent<INavbarIOSBackProps> {
  public render() {
    const {onPress} = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.leftButton}
        hitSlop={hitSlop}
      >
        <Icon name="ios-arrow-back" size={30} color="white" />
      </TouchableOpacity>
    );
  }
}
