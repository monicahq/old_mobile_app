import React, {PureComponent} from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface ITouchableProps {
  style?: ViewStyle;
  onPress: (...args) => any;
  children;
}

export class Touchable extends PureComponent<ITouchableProps, {}> {
  public render() {
    const {style, onPress, children} = this.props;
    return Platform.OS === 'ios' ? (
      <TouchableOpacity style={style} onPress={onPress}>
        {children}
      </TouchableOpacity>
    ) : (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }
}
