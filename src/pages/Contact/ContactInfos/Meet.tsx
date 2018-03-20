import {IContact} from '@models';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

interface IMeetProps {
  contact: IContact;
}

export class Meet extends PureComponent<IMeetProps, {}> {
  public render() {
    const {contact} = this.props;
    console.log(contact);
    return <Text>Meet</Text>;
  }
}
