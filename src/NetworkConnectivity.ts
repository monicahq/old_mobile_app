import React from 'react';
import {withNetworkConnectivity} from 'react-native-offline';

export const networkConnectivity = (
  Component: React.ComponentType<any>
): React.ComponentType<any> =>
  withNetworkConnectivity({
    pingServerUrl:
      'https://qwodijqiwudhoqwiufhqioweufhqwoiuefhqwiouehfqwiouef.com',
    withRedux: true,
  })(Component);
