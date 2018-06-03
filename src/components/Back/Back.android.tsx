import React, {PureComponent} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {IBackProps} from './Back.props';
import {styles} from './Back.styles.android';

export class Back extends PureComponent<IBackProps> {
  public render() {
    const {onPress} = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Icon name="arrow-back" size={35} color="black" style={styles.icon} />
      </TouchableWithoutFeedback>
    );
  }
}
