import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export const LoginScreen = ({navigation, banner}) => (
  <SafeAreaView
    forceInset={{top: 'always'}}
    style={{backgroundColor: '#253760', flex: 1}}>
    <Text>Login</Text>

    <Button onPress={() => navigation.navigate('Tabs')} title="Go to tabs" />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </SafeAreaView>
);
