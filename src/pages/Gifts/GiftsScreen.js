import {connect} from 'react-redux';

import {Gifts} from './Gifts';
import {back} from 'redux/router';

export const mapStateToProps = (state, {navigation}) => ({});

export const mapDispatchToProps = dispatch => ({
  back: () => dispatch(back()),
});

export const GiftsScreen = connect(mapStateToProps, mapDispatchToProps)(Gifts);
