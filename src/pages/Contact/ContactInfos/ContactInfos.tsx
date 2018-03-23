import React, {PureComponent} from 'react';
import {SegmentedControlIOS} from 'react-native';

import {IContact} from '@models';
import {primaryColor} from '@theme';
import {Contact} from './Contact';
import {Family} from './Family';
import {Meet} from './Meet';
import {Work} from './Work';

const values = ['Family', 'How you met', 'Work info', 'Contact'];

interface IContactInfosProps {
  contact: IContact;
}
interface IContactInfosState {
  index: number;
}

export class ContactInfos extends PureComponent<
  IContactInfosProps,
  IContactInfosState
> {
  public state = {
    index: 1,
  };
  public setSegmentedControlState = event =>
    this.setState({index: event.nativeEvent.selectedSegmentIndex});

  public render() {
    const {index} = this.state;
    const {contact} = this.props;

    const Elem =
      index === 0 ? Family : index === 1 ? Meet : index === 2 ? Work : Contact;

    return [
      <SegmentedControlIOS
        key={0}
        tintColor={primaryColor}
        values={values}
        selectedIndex={index}
        onChange={this.setSegmentedControlState}
      />,
      <Elem key={1} contact={contact} />,
    ];
  }
}
