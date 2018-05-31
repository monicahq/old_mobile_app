import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';

import {Button} from '@components';
import {I18n} from '@i18n';
import {commonStyles, preAuthScreensStyles} from '@theme';

interface ILaunchProps {
  navigate: (routeName) => any;
}

export class Launch extends PureComponent<ILaunchProps, {}> {
  public render() {
    const {navigate} = this.props;

    return (
      <View style={preAuthScreensStyles.container}>
        <View style={commonStyles.flex} />

        <View style={preAuthScreensStyles.centeredBlock}>
          <Image source={require('./assets/launch.png')} />

          <Text style={preAuthScreensStyles.primaryText}>
            {I18n.t('auth:launch1')}
          </Text>
          <Text style={preAuthScreensStyles.secondaryText}>
            {I18n.t('auth:launch2')}
          </Text>

          <Button onPress={navigate('Login')} id="goToLogin">
            {I18n.t('common:getstarted')}
          </Button>
        </View>

        <View style={commonStyles.flex} />

        {/* <BottomNav
      title="Already have an account ?"
      linkTitle="Sign in"
      onPress={navigate('Login')}
    /> */}
      </View>
    );
  }
}
