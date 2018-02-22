import {connect} from 'react-redux';

import {Activities} from './Activities';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const ActivitiesScreen = connect(mapStateToProps, mapDispatchToProps)(
  Activities,
);
