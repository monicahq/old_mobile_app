import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import {commonStyles} from 'theme';
import {styles} from './UnderConstruction.styles';

export class UnderConstruction extends Component {
  render() {
    return (
      <View style={styles.flexCentered}>
        <View style={commonStyles.flex} />
        <Image source={require('./images/under-construction.png')} />
        <Text style={styles.text}>This page is under construction</Text>
        <View style={commonStyles.flex} />
      </View>
    );
  }
}
