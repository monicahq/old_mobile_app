import {connect} from 'react-redux';

import {getGiftsByContact} from '@redux/gifts';
import {back} from '@redux/router';
import {Gifts} from './Gifts';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    gifts: (contact.gifts || []).map(giftId => state.gifts[giftId]),
    isFetching: state.getGiftsByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getGiftsByContact: () => dispatch(getGiftsByContact(navigation.state.params)),
});

export const GiftsScreen = connect(mapStateToProps, mapDispatchToProps)(Gifts);
