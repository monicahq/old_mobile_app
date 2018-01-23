import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './Back.styles';
import {hitSlop} from 'theme';

export const Back = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.icon} hitSlop={hitSlop}>
    <Icon name="ios-arrow-back" size={35} color="black" />
  </TouchableOpacity>
);

Back.propTypes = {
  onPress: PropTypes.func.isRequired,
};
