import {StyleSheet} from 'react-native';

export const preAuthScreensStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  centeredBlock: {
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
