import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const SettingsScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Settings</Text>
  </SafeAreaView>
);
