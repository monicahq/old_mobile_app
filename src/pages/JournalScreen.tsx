import React from 'react';
import {View} from 'react-native';

import {Navbar, UnderConstruction} from '@components';
import {commonStyles} from '@theme';

export const JournalScreen = () => (
  <View style={commonStyles.flex}>
    <Navbar title="Journal" />
    <UnderConstruction />
  </View>
);
