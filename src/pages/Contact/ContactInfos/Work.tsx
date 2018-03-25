import {IContact} from '@models';
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import {ListItem} from '@components';
import {styles} from './Work.styles';

interface IWorkProps {
  contact: IContact;
}

export class Work extends PureComponent<IWorkProps, {}> {
  public render() {
    const {contact} = this.props;
    const {career} = contact.information;

    const items = [
      career.job,
      career.company,
      career.linkedin_profile_url,
    ].filter(info => !!info);

    return (
      <View style={styles.container}>
        {items.length === 0 && (
          <Text style={styles.noWorkInfo}>No work information</Text>
        )}
        {items.map((item, index) => (
          <ListItem
            key={index}
            title={item}
            lastItem={index === items.length - 1}
          />
        ))}
      </View>
    );
  }
}
