import {StyleSheet} from 'react-native';

import {mutedTextColor} from '@theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2E4E5',
  },
  betaToggleContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  betaTitle: {
    fontSize: 14,
    flex: 1,
  },
  betaInfo: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  betaSubtitle: {
    fontSize: 12,
  },
  logoutContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: '#1361cb',
  },
  appVersion: {
    color: mutedTextColor,
    fontSize: 12,
    marginTop: 10,
  },
  freepik1: {
    color: mutedTextColor,
    textAlign: 'center',
    fontSize: 10,
    marginTop: 10,
  },
  freepik2: {
    color: mutedTextColor,
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 10,
    fontWeight: '600',
  },
});
