import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  notLastRow: {
    borderBottomColor: '#96A5B3',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  typeText: {
    marginLeft: 2,
    color: '#96A5B3',
  },
});
