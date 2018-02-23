import {StyleSheet, PixelRatio} from 'react-native';

export const styles = StyleSheet.create({
  noteContainer: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  date: {
    fontSize: 12,
    marginBottom: 8,
  },
});
