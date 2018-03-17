import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

export class Meet extends PureComponent {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  render() {
    const {contact} = this.props;
    console.log(contact.information.how_you_met);
    return <Text>Meet</Text>;
  }
}
