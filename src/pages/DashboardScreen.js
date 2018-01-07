import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const DashboardScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Dashboard</Text>
  </SafeAreaView>
);
