import React, {PureComponent} from 'react';
import {SegmentedControlIOS} from 'react-native';

import {primaryColor} from 'theme';

import {Contact} from './Contact';
import {Family} from './Family';
import {Meet} from './Meet';
import {Work} from './Work';

const values = ['Family', 'How you met', 'Work info', 'Contact'];

export class ContactInfos extends PureComponent {
  state = {
    index: 0,
  };
  setSegmentedControlState = event =>
    this.setState({index: event.nativeEvent.selectedSegmentIndex});

  render() {
    const {index} = this.state;

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
      <Elem key={1} />,
    ];
  }
}
