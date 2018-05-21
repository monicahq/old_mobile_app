import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getDebtsByContact} from '@redux/debts';
import {Debts} from './Debts';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    debts: (contact.debts || []).map(noteId => state.debts[noteId]),
    isFetching: state.getDebtsByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getDebtsByContact: () => dispatch(getDebtsByContact(navigation.state.params)),
});

export const DebtsScreen = connect(mapStateToProps, mapDispatchToProps)(Debts);
