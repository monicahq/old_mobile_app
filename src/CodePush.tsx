import React from 'react';
import RNCodePush from 'react-native-code-push';

export const codePush = (Component: React.ComponentType): React.ComponentType =>
  RNCodePush({
    checkFrequency: RNCodePush.CheckFrequency.MANUAL,
  })(Component);
