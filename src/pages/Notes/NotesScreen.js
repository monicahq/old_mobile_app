import {connect} from 'react-redux';

import {Notes} from './Notes';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const NotesScreen = connect(mapStateToProps, mapDispatchToProps)(Notes);
