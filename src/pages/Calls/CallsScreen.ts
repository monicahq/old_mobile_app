import {IAppState} from '@models';
import {connect} from 'react-redux';

import {getCallsByContact} from '@redux/calls';
import {back} from '@redux/router';
import {Calls} from './Calls';

export const mapStateToProps = (state: IAppState, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    calls: (contact.calls || []).map(callId => state.calls[callId]),
    isFetching: state.getCallsByContact.isFetching,
    statistics: state.getCallsByContact.statistics,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getCallsByContact: () => dispatch(getCallsByContact(navigation.state.params)),
});

export const CallsScreen = connect(mapStateToProps, mapDispatchToProps)(Calls);
