import React, {PureComponent} from 'react';
import {View} from 'react-native';

import {ListItem} from '@components';
import {IContact} from '@models';
import {styles} from './Contact.styles';

interface IContactProps {
  contact: IContact;
}

export class Contact extends PureComponent<IContactProps, {}> {
  public render() {
    const {contact} = this.props;
    console.log(contact);
    return (
      <View style={styles.container}>
        <ListItem title={'Oct 21, 1978'} infoRight={'2 month'} />
        <ListItem title={'Address'} />
        <ListItem title={'email'} />
        <ListItem title={'phone'} />
        <ListItem title={'facebook'} />
        <ListItem title={'linkedin'} lastItem={true} />
      </View>
    );
  }
}
