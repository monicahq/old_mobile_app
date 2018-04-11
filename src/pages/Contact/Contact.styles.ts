import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topAndroidContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
  },
  topIosContainer: {
    paddingTop: 45,
    paddingBottom: 10,
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
  },
  subtitle: {
    textAlign: 'center',
  },
  scrollView: {
    backgroundColor: '#F5F6F7',
    flex: 1,
  },
  bloc: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#E2E4E5',
    borderTopWidth: 1 / PixelRatio.get(),
    borderBottomWidth: 1 / PixelRatio.get(),
    paddingHorizontal: 10,
  },
  paddingVertical: {
    paddingVertical: 10,
  },
  contactImage: {
    position: 'absolute',
    top: -32,
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 3,
  },
});
