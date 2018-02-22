import {connect} from 'react-redux';

import {Calls} from './Calls';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const CallsScreen = connect(mapStateToProps, mapDispatchToProps)(Calls);
