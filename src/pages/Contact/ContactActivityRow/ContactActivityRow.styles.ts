import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  image: {
    marginLeft: 5,
    marginRight: 10,
  },
  border: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#E2E4E5',
  },
  icon: {
    marginLeft: 10,
  },
});
