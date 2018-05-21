import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {ListItem} from '@components';
import {I18n} from '@i18n';
import {IContact} from '@models';
import {getAge, getName, getRelationships} from '@utils/contacts';
import {styles} from './Relationships.styles';

interface IMeetProps {
  contact: IContact;
}

export class Relationships extends PureComponent<IMeetProps, {}> {
  public render() {
    const {contact} = this.props;
    const people = getRelationships(contact);

    return (
      <View style={styles.container}>
        {people.length === 0 && (
          <Text style={styles.noFamily}>
            {I18n.t('contacts:relationships.none')}
          </Text>
        )}

        {people.map((person, index) => {
          const age = getAge(person.contact);
          const title = getName(person.contact) + (age ? ', ' + age : '');
          return (
            <ListItem
              key={person.contact.id}
              lastItem={index === people.length - 1}
              title={title}
              subtitle={'(' + person.type + ')'}
            />
          );
        })}
      </View>
    );
  }
}
