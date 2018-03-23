import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  descriptionText: {
    color: '#818181',
    fontSize: 14,
    marginTop: 5,
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 30,
  },
});
