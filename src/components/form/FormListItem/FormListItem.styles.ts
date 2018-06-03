import {PixelRatio, StyleSheet} from 'react-native';

export const borderColor = '#b5b5b5';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor,
    borderBottomWidth: 1 / PixelRatio.get(),
    width: '100%',
  },
  last: {
    borderBottomWidth: 0,
  },
});
