import {PixelRatio, StyleSheet} from 'react-native';

const radius = 10;

export const styles = StyleSheet.create({
  container: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedContainer: {
    backgroundColor: '#057CFC',
  },
  uncheckedContainer: {
    borderColor: '#979797',
    borderWidth: 1 / PixelRatio.get(),
  },
});
