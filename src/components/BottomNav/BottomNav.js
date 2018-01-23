import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {hitSlop} from '../../theme';
import {styles} from './BottomNav.styles';

export const BottomNav = ({onPress, title, linkTitle}) => (
  <View style={styles.bottomNav}>
    <Text>{title} </Text>
    <TouchableOpacity hitSlop={hitSlop} onPress={onPress}>
      <Text style={styles.bottomLinkText}>{linkTitle}</Text>
    </TouchableOpacity>
  </View>
);

BottomNav.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};
