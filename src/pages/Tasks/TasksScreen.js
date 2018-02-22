import {connect} from 'react-redux';

import {Tasks} from './Tasks';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const TasksScreen = connect(mapStateToProps, mapDispatchToProps)(Tasks);
