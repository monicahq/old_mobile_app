import {StyleSheet} from 'react-native';

export const borderColor = '#b5b5b5';

const height = 30;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    height,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
});
