import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
});
