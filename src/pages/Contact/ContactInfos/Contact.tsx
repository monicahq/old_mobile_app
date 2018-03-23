import {IContact} from '@models';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

interface IContactProps {
  contact: IContact;
}

export class Contact extends PureComponent<IContactProps, {}> {
  public render() {
    const {contact} = this.props;
    console.log(contact);
    return <Text>Contact</Text>;
  }
}
