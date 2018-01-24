import RNCodePush from 'react-native-code-push';

export const codePush = Component =>
  RNCodePush({
    checkFrequency: RNCodePush.CheckFrequency.MANUAL,
  })(Component);
