import {connect} from 'react-redux';

import {Calls} from './Calls';
import {back} from 'redux/router';
import {getCallsByContact} from 'redux/calls';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    calls: (contact.calls || []).map(callId => state.calls[callId]),
    isFetching: state.getCallsByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getCallsByContact: () => dispatch(getCallsByContact(navigation.state.params)),
});

export const CallsScreen = connect(mapStateToProps, mapDispatchToProps)(Calls);
