import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {Navbar, UnderConstruction} from 'components';
import {commonStyles} from 'theme';

export class Tasks extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
  };
  render() {
    const {back} = this.props;
    return (
      <View style={commonStyles.flex}>
        <Navbar title="Tasks" onBack={back} />
        <UnderConstruction />
      </View>
    );
  }
}
