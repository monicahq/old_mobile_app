import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {getLastUpdatedDate} from 'utils/contacts';
import {ContactAvatar} from 'components/ContactAvatar';

import {styles} from './ContactListItem.styles';
import {commonStyles} from 'theme';

export class ContactListItem extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
    bgOddRow: PropTypes.bool,
  };
  render() {
    const {contact, onPress, bgOddRow} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, bgOddRow && commonStyles.bgOddRow]}>
          <ContactAvatar contact={contact} size={50} />
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
