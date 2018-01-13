import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {styles} from './Launch.styles';
import {Button} from '../Button';

export const Launch = ({navigate}) => (
  <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
    <View style={styles.flex} />

    <View style={styles.centeredBlock}>
      <Image source={require('./assets/launch.png')} />

      <Text style={styles.primaryText}>
        Keep track of every interaction with your friend and family!
      </Text>
      <Text style={styles.secondaryText}>
        Remember when you last called, what you talked about, the name of their
        kids or what they prefer to eat!
      </Text>

      <Button onPress={() => navigate('Login')}>Get started</Button>
    </View>

    <View style={styles.flex} />

    <View style={styles.bottomNav}>
      <Text>Already have an account ? </Text>
      <TouchableOpacity hitSlop={hitSlop} onPress={() => navigate('Login')}>
        <Text style={styles.bottomLinkText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const hitSlop = {
  top: 15,
  left: 15,
  bottom: 15,
  right: 15,
};
