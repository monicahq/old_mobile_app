import React from 'react';
import PropTypes from 'prop-types';
import {Text, Image, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {commonStyles, forceInset, preAuthScreensStyles} from 'theme';
import {Button, BottomNav} from 'components';

export const Launch = ({navigate}) => (
  <SafeAreaView forceInset={forceInset} style={preAuthScreensStyles.container}>
    <View style={commonStyles.flex} />

    <View style={preAuthScreensStyles.centeredBlock}>
      <Image source={require('./assets/launch.png')} />

      <Text style={preAuthScreensStyles.primaryText}>
        Keep track of every interaction with your friend and family!
      </Text>
      <Text style={preAuthScreensStyles.secondaryText}>
        Remember when you last called, what you talked about, the name of their
        kids or what they prefer to eat!
      </Text>

      <Button onPress={navigate('Signup')}>Get started</Button>
    </View>

    <View style={commonStyles.flex} />

    <BottomNav
      title="Already have an account ?"
      linkTitle="Sign in"
      onPress={navigate('Login')}
    />
  </SafeAreaView>
);

Launch.propTypes = {
  navigate: PropTypes.func.isRequired,
};
