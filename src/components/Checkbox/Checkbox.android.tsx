import React, {PureComponent} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {ICheckboxProps} from './Checkbox.props';
import {styles} from './Checkbox.styles';

export class Checkbox extends PureComponent<ICheckboxProps> {
  public render() {
    const {checked} = this.props;

    return (
      <View
        style={[
          styles.container,
          checked ? styles.checkedContainer : styles.uncheckedContainer,
        ]}
      >
        {checked && <Icon name="ios-checkmark" size={20} color="white" />}
      </View>
    );
  }
}
