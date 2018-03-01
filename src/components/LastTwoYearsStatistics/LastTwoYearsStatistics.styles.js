import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 1 / PixelRatio.get(),
  },
  leftContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flex: 1,
  },
  rightContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flex: 1,
    borderColor: 'grey',
    borderLeftWidth: 1 / PixelRatio.get(),
  },
  image: {
    marginHorizontal: 10,
  },
  count: {
    fontSize: 25,
  },
  text: {
    color: '#355974',
  },
});
