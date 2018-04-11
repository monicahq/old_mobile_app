import {StyleSheet} from 'react-native';

export const primaryColor = '#355974';
export const navbarColor = primaryColor;
export const mutedTextColor = '#676767';
export const statusBarLightContent = {style: 'light-content'};

export const commonStyles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  bgOddRow: {
    backgroundColor: '#FBFBFB',
  },
  mutedText: {
    color: mutedTextColor,
  },
  activityIndicator: {
    marginVertical: 20,
  },
  toolbarAndroid: {
    height: 56,
    backgroundColor: navbarColor,
  },
});

export const segmentedControlGroupStyles = StyleSheet.create({
  tabStyle: {
    borderColor: primaryColor,
  },
  activeTabStyle: {
    backgroundColor: primaryColor,
  },
  tabTextStyle: {
    color: primaryColor,
  },
  activeTabTextStyle: {
    color: 'white',
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
