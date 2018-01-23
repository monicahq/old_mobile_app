import {StyleSheet} from 'react-native';

export const navbarColor = '#355974';
export const mutedTextColor = '#676767';

export const commonStyles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  flex: {
    flex: 1,
  },
  mutedText: {
    color: mutedTextColor,
  },
  activityIndicator: {
    marginTop: 20,
  },
  toolbarAndroid: {
    height: 56,
    backgroundColor: navbarColor,
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
