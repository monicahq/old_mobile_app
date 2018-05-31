import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  reminderContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderColor: '#E2E4E5',
    borderBottomWidth: 1 / PixelRatio.get(),
    flexDirection: 'row',
  },
  dateContainer: {
    paddingRight: 20,
  },
  date: {
    textAlign: 'center',
    fontSize: 17,
    color: '#355974',
  },
  dateYear: {
    textAlign: 'center',
    fontSize: 20,
    color: '#355974',
  },
  descriptionText: {
    color: '#818181',
    fontSize: 14,
    marginTop: 5,
  },
  badge: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginLeft: 6,
    marginTop: 5,
    borderRadius: 5,
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
  },
});
