import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getGiftsByContact} from '@redux/gifts';
import {GiftsList} from './GiftsList';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    gifts: (contact.gifts || []).map(giftId => state.gifts[giftId]),
    isFetching: state.getGiftsByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getGiftsByContact: () => dispatch(getGiftsByContact(navigation.state.params)),
});

export const GiftsListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftsList);
