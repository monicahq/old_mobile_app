import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './NetworkStatus.styles';

interface INetworkStatusProps {
  isConnected: boolean;
}

export class NetworkStatus extends PureComponent<INetworkStatusProps> {
  public render() {
    if (this.props.isConnected) {
      return null;
    }
    return (
      <Icon name="signal-off" size={25} color="white" style={styles.icon} />
    );
  }
}
