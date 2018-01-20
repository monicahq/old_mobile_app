import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './Back.styles';

export const Back = ({onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Icon name="close" size={38} color="black" style={styles.icon} />
  </TouchableWithoutFeedback>
);

Back.propTypes = {
  onPress: PropTypes.func.isRequired,
};
