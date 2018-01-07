import React from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

import { navigate } from '../redux/router';


const L = ({ navigate }) => (
  <SafeAreaView forceInset={{ top: 'always' }} style={{backgroundColor: '#253760', flex: 1}}>
    <Text>Launch</Text>

    <Button
      onPress={() => navigate('Login')}
      title="Go to a login screen"
    />
  </SafeAreaView>
);

export const LaunchScreen = connect(null, dispatch => {
  return {
    navigate: routeName => {
      dispatch(navigate(routeName));
    }
  };
})(L);
