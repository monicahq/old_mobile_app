import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {hitSlop} from '../../theme';
import {styles} from './BottomNav.styles';

interface IBottomNavProps {
  onPress: (...args) => any;
  title: string;
  linkTitle: string;
}

export class BottomNav extends PureComponent<IBottomNavProps> {
  public render() {
    const {onPress, title, linkTitle} = this.props;

    return (
      <View style={styles.bottomNav}>
        <Text>{title} </Text>
        <TouchableOpacity hitSlop={hitSlop} onPress={onPress}>
          <Text style={styles.bottomLinkText}>{linkTitle}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
