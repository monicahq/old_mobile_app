import React, {PureComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {hitSlop} from '@theme';
import {IBackProps} from './Back.props';
import {styles} from './Back.styles.ios';

export class Back extends PureComponent<IBackProps> {
  public render() {
    const {onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.icon} hitSlop={hitSlop}>
        <Icon name="ios-arrow-back" size={35} color="black" />
      </TouchableOpacity>
    );
  }
}
