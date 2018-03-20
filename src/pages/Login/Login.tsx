import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';

import {Back} from '@components';
import {IRouterBackOperation, IUserSetTokenOperation} from '@models/operations';
import {commonStyles, forceInset, preAuthScreensStyles} from '@theme';
import {LoginFormContainer} from './form/LoginFormContainer';

interface ILoginProps {
  back: IRouterBackOperation;
  navigate: (routeName) => () => any;
  setToken: IUserSetTokenOperation;
}

export class Login extends PureComponent<ILoginProps, {}> {
  public onSuccessFormResult = res => {
    const {setToken, navigate} = this.props;
    setToken(res.access_token);
    navigate('Tabs')();
  };

  public render() {
    const {back} = this.props;
    // const {navigate} = this.props;

    return (
      <KeyboardAwareScrollView contentContainerStyle={commonStyles.flex}>
        <SafeAreaView
          forceInset={forceInset}
          style={preAuthScreensStyles.container}
        >
          <Back onPress={back} />
          <View style={commonStyles.flex} />

          <View style={preAuthScreensStyles.centeredBlock}>
            <Image source={require('./assets/login.png')} />

            <Text style={preAuthScreensStyles.primaryText}>
              Sign in with your account
            </Text>

            <LoginFormContainer onSuccess={this.onSuccessFormResult} />
          </View>

          <View style={commonStyles.flex} />

          {/* <BottomNav
            title="Don't have an account ?"
            linkTitle="Sign up"
            onPress={navigate('Signup')}
          /> */}
        </SafeAreaView>
      </KeyboardAwareScrollView>
    );
  }
}
