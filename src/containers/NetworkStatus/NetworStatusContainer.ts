import {connect} from 'react-redux';

import {IAppState} from '@models';
import {NetworkStatus} from './NetworkStatus';

export const NetworkStatusContainer = connect((state: IAppState) => ({
  isConnected: state.network.isConnected,
}))(NetworkStatus);
