import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {Navbar, UnderConstruction} from 'components';
import {commonStyles} from 'theme';

export class Activities extends Component {
  static propTypes = {
    back: PropTypes.func.isRequired,
  };
  render() {
    const {back} = this.props;
    return (
      <View style={commonStyles.flex}>
        <Navbar title="Activities" onBack={back} />
        <UnderConstruction />
      </View>
    );
  }
}
