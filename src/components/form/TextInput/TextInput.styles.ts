import {PixelRatio, Platform, StyleSheet} from 'react-native';

export const borderColor = '#b5b5b5';

export const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  title: {
    width: '100%',
    flexDirection: 'row',
  },
  errorText: {
    width: '100%',
    color: 'red',
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor,
    borderBottomWidth: Platform.OS === 'ios' ? 1 / PixelRatio.get() : 0,
    marginBottom: 20,
  },
  titleMultine: {
    fontSize: 11,
  },
});
