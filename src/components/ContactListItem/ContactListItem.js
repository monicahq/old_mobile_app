import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getAvatarUrl, getLastUpdatedDate} from 'utils/contacts';

import {styles} from './ContactListItem.styles';
import {commonStyles} from 'theme';

export class ContactListItem extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  render() {
    const {contact, onPress} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image source={{uri: getAvatarUrl(contact)}} style={styles.image} />
          <View style={styles.textContainer}>
            <Text>
              {contact.first_name} {contact.last_name}
            </Text>
            <Text style={commonStyles.mutedText}>
              Last updated {getLastUpdatedDate(contact)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
