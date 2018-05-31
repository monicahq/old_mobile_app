import {IRootState} from '@models';
import {connect} from 'react-redux';

import {pop} from '@navigator/NavigationService';
import {getCallsByContact} from '@redux/calls';
import {CallsList} from './CallsList';

export const mapStateToProps = (state: IRootState, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    calls: (contact.calls || []).map(callId => state.calls[callId]),
    isFetching: state.getCallsByContact.isFetching,
    statistics: state.getCallsByContact.statistics,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  pop,
  getCallsByContact: () => dispatch(getCallsByContact(navigation.state.params)),
});

export const CallsListScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(CallsList);
