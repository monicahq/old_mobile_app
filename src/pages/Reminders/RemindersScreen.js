import {connect} from 'react-redux';

import {Reminders} from './Reminders';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const RemindersScreen = connect(mapStateToProps, mapDispatchToProps)(
  Reminders,
);
