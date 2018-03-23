import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Button} from '@components';
import {commonStyles, forceInset, preAuthScreensStyles} from '@theme';

interface ILaunchProps {
  navigate: (routeName) => any;
}

export class Launch extends PureComponent<ILaunchProps, {}> {
  public render() {
    const {navigate} = this.props;

    return (
      <SafeAreaView
        forceInset={forceInset}
        style={preAuthScreensStyles.container}
      >
        <View style={commonStyles.flex} />

        <View style={preAuthScreensStyles.centeredBlock}>
          <Image source={require('./assets/launch.png')} />

          <Text style={preAuthScreensStyles.primaryText}>
            Keep track of every interaction with your friend and family!
          </Text>
          <Text style={preAuthScreensStyles.secondaryText}>
            Remember when you last called, what you talked about, the name of
            their kids or what they prefer to eat!
          </Text>

          <Button onPress={navigate('Login')}>Get started</Button>
        </View>

        <View style={commonStyles.flex} />

        {/* <BottomNav
      title="Already have an account ?"
      linkTitle="Sign in"
      onPress={navigate('Login')}
    /> */}
      </SafeAreaView>
    );
  }
}
