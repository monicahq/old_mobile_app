import {IContact} from '@models';
import moment from 'moment';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {ListItem} from '@components';
import {I18n} from '@i18n';
import {getName} from '@utils/contacts';
import {styles} from './Meet.styles';

interface IMeetProps {
  contact: IContact;
}

export class Meet extends PureComponent<IMeetProps, {}> {
  public render() {
    const {contact} = this.props;
    const labels = this.getLabels(contact);

    return (
      <View style={styles.container}>
        {labels.length === 0 && (
          <Text style={styles.noInformation}>
            {I18n.t('contacts:meet.none')}
          </Text>
        )}
        {labels.map((label, index) => (
          <ListItem
            key={index}
            title={label}
            lastItem={labels.length - 1 === index}
          />
        ))}
      </View>
    );
  }

  private getLabels(contact: IContact) {
    const res = [];

    // date
    const date = contact.information.how_you_met.first_met_date.date;
    if (date) {
      res.push(moment(date).calendar());
    }

    // met through
    const metThrough =
      contact.information.how_you_met.first_met_through_contact;
    if (metThrough) {
      res.push(I18n.t('contacts:meet.through', {name: getName(metThrough)}));
    }

    // description
    const description = contact.information.how_you_met.general_information;
    if (description) {
      res.push(description);
    }

    return res;
  }
}
