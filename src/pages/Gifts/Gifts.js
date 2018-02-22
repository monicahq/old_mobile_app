import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {Navbar, UnderConstruction} from 'components';
import {commonStyles} from 'theme';

export class Gifts extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
  };
  render() {
    const {back} = this.props;
    return (
      <View style={commonStyles.flex}>
        <Navbar title="Gifts" onBack={back} />
        <UnderConstruction />
      </View>
    );
  }
}
