import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {ContactAvatar} from '@components';
import {I18n} from '@i18n';
import {IContact} from '@models';
import {commonStyles} from '@theme';
import {getLastUpdatedDate} from '@utils/contacts';
import {styles} from './ContactListItem.styles';

interface IContactListItemProps {
  contact: IContact;
  onPress: (...args) => any;
  bgOddRow?: boolean;
}

export class ContactListItem extends PureComponent<IContactListItemProps> {
  public render() {
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
              {I18n.t('common:lastUpdated', {
                date: getLastUpdatedDate(contact),
              })}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
