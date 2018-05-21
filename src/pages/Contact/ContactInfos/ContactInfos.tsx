import React, {PureComponent} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import {I18n} from '@i18n';
import {IContact} from '@models';
import {segmentedControlGroupStyles} from '@theme';
import {Contact} from './Contact';
import {Meet} from './Meet';
import {Relationships} from './Relationships';
import {Work} from './Work';

const values = [
  I18n.t('contacts:relationships.relations'),
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
  public setSegmentedControlState = index => this.setState({index});
  public render() {
    const {index} = this.state;
    const {contact} = this.props;

    const Elem =
      index === 0
        ? Relationships
        : index === 1
          ? Meet
          : index === 2
            ? Work
            : Contact;

    return [
      <SegmentedControlTab
        key={0}
        tabStyle={segmentedControlGroupStyles.tabStyle}
        tabTextStyle={segmentedControlGroupStyles.tabTextStyle}
        activeTabTextStyle={segmentedControlGroupStyles.activeTabTextStyle}
        activeTabStyle={segmentedControlGroupStyles.activeTabStyle}
        values={values}
        selectedIndex={index}
        onTabPress={this.setSegmentedControlState}
      />,
      <Elem key={1} contact={contact} />,
    ];
  }
}
