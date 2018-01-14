import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  flex: {
    flex: 1,
  },
});

export const hitSlop = {
  top: 15,
  left: 15,
  bottom: 15,
  right: 15,
};

export const forceInset = {
  top: 'always',
};

export * from './preAuthScreen';
