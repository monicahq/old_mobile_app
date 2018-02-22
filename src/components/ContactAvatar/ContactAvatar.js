import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, ViewPropTypes} from 'react-native';
import {getAvatarUrl, getAvatarColor, getInitials} from 'utils/contacts';

import {styles} from './ContactAvatar.styles';

export class ContactAvatar extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired,
    style: ViewPropTypes.style,
  };

  render() {
    const {contact, size, style} = this.props;

    const avatar = getAvatarUrl(contact);
    const sizeStyle = {width: size, height: size};

    if (avatar) {
      return (
        <Image
          source={{uri: getAvatarUrl(contact)}}
          style={[styles.avatar, sizeStyle, style]}
        />
      );
    }

    return (
      <View
        style={[
          styles.avatar,
          sizeStyle,
          style,
          {backgroundColor: getAvatarColor(contact) || 'rgb(112, 149, 18)'},
        ]}>
        <Text style={styles.text}>{getInitials(contact)}</Text>
      </View>
    );
  }
}
