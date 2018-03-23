import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'rgb(43, 187, 72)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  activityIndicator: {
    marginLeft: 10,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(43, 187, 72, 0.4)',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
