import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, ViewPropTypes} from 'react-native';
import {getAvatarUrl, getAvatarColor} from 'utils/contacts';

import {styles} from './ContactAvatar.styles';

export class ContactAvatar extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    size: PropTypes.number.isRequired,
    style: ViewPropTypes.style,
  };
  getInitials() {
    const {contact} = this.props;

    return (
      (contact.first_name ? contact.first_name.charAt(0) : '') +
      (contact.last_name ? contact.last_name.charAt(0) : '')
    ).toUpperCase();
  }

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
        <Text style={styles.text}>{this.getInitials()}</Text>
      </View>
    );
  }
}
