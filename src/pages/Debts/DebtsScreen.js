import {connect} from 'react-redux';

import {Debts} from './Debts';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const DebtsScreen = connect(mapStateToProps, mapDispatchToProps)(Debts);
