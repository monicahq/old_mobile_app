import {StyleSheet, PixelRatio} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
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
  noFamily: {
    marginVertical: 30,
    textAlign: 'center',
  },
});
