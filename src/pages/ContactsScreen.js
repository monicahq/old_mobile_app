import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const ContactsScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text>Contacts</Text>
  </SafeAreaView>
);
