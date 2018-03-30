import React from 'react';
import {View} from 'react-native';

import {Navbar, UnderConstruction} from '@components';
import {I18n} from '@i18n';
import {commonStyles} from '@theme';

export const JournalScreen = () => (
  <View style={commonStyles.flex}>
    <Navbar title={I18n.t('common:journal')} />
    <UnderConstruction />
  </View>
);
