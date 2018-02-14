import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ViewPropTypes,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

export const Touchable = ({style, onPress, children}) =>
  Platform.OS === 'ios' ? (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};
