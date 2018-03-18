import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

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
          return (
            <View
              key={person.id}
              style={[
                styles.row,
                index !== people.length - 1 ? styles.notLastRow : null,
              ]}
            >
              <Text>
                {person.first_name} {person.last_name}
              </Text>
              {age && <Text>, {age}</Text>}
              <Text style={styles.typeText}>({person.type})</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
