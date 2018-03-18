import {connect} from 'react-redux';

import {getDebtsByContact} from '@redux/debts';
import {back} from '@redux/router';
import {Debts} from './Debts';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    debts: (contact.debts || []).map(noteId => state.debts[noteId]),
    isFetching: state.getDebtsByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getDebtsByContact: () => dispatch(getDebtsByContact(navigation.state.params)),
});

export const DebtsScreen = connect(mapStateToProps, mapDispatchToProps)(Debts);
