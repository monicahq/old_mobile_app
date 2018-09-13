import {getAvatarColor, getAvatarUrl, getInitials} from '@utils/contacts';
import React, {PureComponent} from 'react';
import {Image, ImageStyle, Text, View} from 'react-native';

import {IContact} from '@models';
import {styles} from './ContactAvatar.styles';

interface IContactAvatar {
  contact: IContact;
  size: number;
  style?: ImageStyle;
}

export class ContactAvatar extends PureComponent<IContactAvatar> {
  public render() {
    const {contact, size, style} = this.props;

    const avatar = getAvatarUrl(contact);
    const sizeStyle = {width: size, height: size};

    if (avatar) {
      return (
        <Image
          // @ts-ignore TODO Fix this
          source={{uri: getAvatarUrl(contact)}}
          // @ts-ignore TODO Fix this
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
        ]}
      >
        <Text style={styles.text}>{getInitials(contact)}</Text>
      </View>
    );
  }
}
