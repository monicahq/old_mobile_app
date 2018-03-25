import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {ListItem} from '@components';
import {IContact} from '@models';
import {getAge, getFamily} from '@utils/contacts';
import {styles} from './Family.styles';

interface IMeetProps {
  contact: IContact;
}

export class Family extends PureComponent<IMeetProps, {}> {
  public render() {
    const {contact} = this.props;
    const people = getFamily(contact);

    return (
      <View style={styles.container}>
        {people.length === 0 && (
          <Text style={styles.noFamily}>No family member</Text>
        )}

        {people.map((person, index) => {
          const age = getAge(person);
          const title =
            person.first_name + person.last_name + (age ? ', age' : '');
          return (
            <ListItem
              key={person.id}
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
