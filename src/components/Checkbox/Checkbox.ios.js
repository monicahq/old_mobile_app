import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './Checkbox.styles';

export class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
  };

  render() {
    const {checked} = this.props;

    return (
      <View
        style={[
          styles.container,
          checked ? styles.checkedContainer : styles.uncheckedContainer,
        ]}>
        {checked && <Icon name="ios-checkmark" size={20} color="white" />}
      </View>
    );
  }
}
