import React from 'react';
import {Text, Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export const Login = ({navigate, back}) => (
  <SafeAreaView
    forceInset={{top: 'always'}}
    style={{backgroundColor: '#253760', flex: 1}}>
    <Text>Login</Text>

    <Button onPress={() => navigate('Tabs')} title="Go to tabs" />
    <Button onPress={() => back()} title="Go back" />
  </SafeAreaView>
);
