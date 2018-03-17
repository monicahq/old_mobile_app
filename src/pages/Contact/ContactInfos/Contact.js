import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

export class Contact extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  render() {
    const {contact} = this.props;
    console.log(contact);
    return <Text>Contact</Text>;
  }
}
