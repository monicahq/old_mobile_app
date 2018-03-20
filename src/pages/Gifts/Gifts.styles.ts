import {PixelRatio, StyleSheet} from 'react-native';

import {primaryColor} from '@theme';

export const styles = StyleSheet.create({
  giftContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  descriptionText: {
    color: '#818181',
    fontSize: 14,
    marginTop: 5,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  badge: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: primaryColor,
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
  },
});
