import moment from 'moment';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {ListItem} from '@components';
import {I18n} from '@i18n';
import {IContact} from '@models';
import {getAddressLabel} from '@utils/contacts';
import {styles} from './Contact.styles';

interface IContactProps {
  contact: IContact;
}

interface IListLabel {
  title: string;
  infoRight: string;
}

export class Contact extends PureComponent<IContactProps, {}> {
  public render() {
    const {contact} = this.props;
    const labels = this.getLabels(contact);

    return (
      <View style={styles.container}>
        {labels.length === 0 && (
          <Text style={styles.noInformation}>
            {I18n.t('contacts:contact.none')}
          </Text>
        )}
        {labels.map((label, index) => (
          <ListItem
            key={index}
            title={label.title}
            infoRight={label.infoRight}
            lastItem={labels.length - 1 === index}
          />
        ))}
      </View>
    );
  }

  private getLabels(contact: IContact): IListLabel[] {
    const res = [];
    const birthdate = contact.information.dates.birthdate.date;
    if (birthdate) {
      res.push({
        title: moment(birthdate).format('LL'),
        infoRight: moment(birthdate).fromNow(),
      });
    }

    contact.addresses.forEach(address => {
      res.push({title: getAddressLabel(address)});
    });

    contact.contactFields.forEach(contactField => {
      res.push({title: contactField.content});
    });

    return res;
  }
}
