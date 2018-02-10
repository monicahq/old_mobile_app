import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Touchable} from 'components';
import {styles} from './ContactActivityRow.styles';
import {commonStyles} from 'theme';

export class ContactActivityRow extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    last: PropTypes.bool,
  };
  render() {
    const {count, image, title, last, onPress} = this.props;

    return (
      <View>
        <Touchable style={styles.container} onPress={onPress}>
          <Image source={image} style={styles.image} />
          <View style={commonStyles.flex}>
            <Text>{title.toUpperCase()}</Text>
          </View>
          <Text>{count}</Text>
          <Icon
            name="ios-arrow-forward"
            size={25}
            color="#AAA"
            style={styles.icon}
          />
        </Touchable>
        {!last && <View style={styles.border} />}
      </View>
    );
  }
}
