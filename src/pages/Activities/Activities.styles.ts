import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  activityContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  textLeft: {
    color: '#355974',
  },
  textRight: {
    color: '#97A5B2',
  },
  textInfo: {
    marginTop: 5,
    fontSize: 14,
  },
});
