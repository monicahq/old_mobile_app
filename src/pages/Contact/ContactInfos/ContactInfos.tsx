import React, {PureComponent} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import {I18n} from '@i18n';
import {IContact} from '@models';
import {primaryColor} from '@theme';
import {Contact} from './Contact';
import {Family} from './Family';
import {Meet} from './Meet';
import {Work} from './Work';

const values = [
  I18n.t('contacts:family.family'),
  I18n.t('contacts:meet.how'),
  I18n.t('contacts:work.work'),
  I18n.t('contacts:contact.contact'),
];

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
    index: 2,
  };
  public setSegmentedControlState = index =>
    this.setState({index: index});

  public render() {
    const {index} = this.state;
    const {contact} = this.props;

    const Elem =
      index === 0 ? Family : index === 1 ? Meet : index === 2 ? Work : Contact;

    return [
      <SegmentedControlTab
        key={0}
 //       tintColor={primaryColor}
        values={values}
        selectedIndex={index}
//        onChange={this.setSegmentedControlState}
        onTabPress={this.setSegmentedControlState}
      />,
      <Elem key={1} contact={contact} />,
    ];
  }
}
