import {PixelRatio, StyleSheet} from 'react-native';

import {primaryColor} from '@theme';

export const styles = StyleSheet.create({
  debtContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  badge: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
  },
  badgeSuccess: {
    backgroundColor: primaryColor,
  },
  badgeError: {
    backgroundColor: 'red',
  },
  amountText: {
    marginTop: 2,
    marginLeft: 6,
  },
  reasonText: {
    fontSize: 13,
  },
});
