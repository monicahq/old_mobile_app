import {StyleSheet, PixelRatio} from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  bottomNav: {
    paddingVertical: 15,
    borderTopWidth: 1 / PixelRatio.get(),
    borderColor: '#E2E4E5',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomLinkText: {
    color: '#1361cb',
  },
  centeredBlock: {
    paddingHorizontal: 30,
    width: '100%',
  },
  primaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  secondaryText: {
    color: '#97A5B2',
    marginBottom: 20,
    textAlign: 'center',
  },
});
