import {IContact} from '@models';
import React, {PureComponent} from 'react';
import {View} from 'react-native';

import {ListItem} from '@components';
import {styles} from './Meet.styles';

interface IMeetProps {
  contact: IContact;
}

export class Meet extends PureComponent<IMeetProps, {}> {
  public render() {
    const {contact} = this.props;
    console.log(contact);
    return (
      <View style={styles.container}>
        <ListItem title={'Met aug 31 2017'} />
        <ListItem title={'Met through plouf'} />
        <ListItem title={'description'} lastItem={true} />
      </View>
    );
  }
}
