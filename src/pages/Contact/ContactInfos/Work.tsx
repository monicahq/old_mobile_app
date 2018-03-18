import {IContact} from '@models';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

interface IWorkProps {
  contact: IContact;
}

export class Work extends PureComponent<IWorkProps, {}> {
  public render() {
    const {contact} = this.props;
    console.log(contact);
    return <Text>Work</Text>;
  }
}
