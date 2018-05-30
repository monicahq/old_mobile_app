import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Back} from '@components';
import {I18n} from '@i18n';
import {IUserSetTokenOperation} from '@models/operations';
import {IPopAction} from '@navigator/NavigationService';
import {commonStyles, preAuthScreensStyles} from '@theme';
import {LoginFormContainer} from './form/LoginFormContainer';

interface ILoginProps {
  pop: IPopAction;
  navigateToAppStack: () => any;
  navigate: (routeName) => () => any;
  setToken: IUserSetTokenOperation;
}

export class Login extends PureComponent<ILoginProps, {}> {
  public onSuccessFormResult = res => {
    const {setToken, navigateToAppStack} = this.props;
    setToken(res.access_token);
    navigateToAppStack();
  };

  public render() {
    const {pop} = this.props;
    // const {navigate} = this.props;

    return (
      <KeyboardAwareScrollView contentContainerStyle={commonStyles.flex}>
        <View style={preAuthScreensStyles.container}>
          <Back onPress={pop} />
          <View style={commonStyles.flex} />

          <View style={preAuthScreensStyles.centeredBlock}>
            <Image source={require('./assets/login.png')} />

            <Text style={preAuthScreensStyles.primaryText}>
              {I18n.t('auth:signinTitle')}
            </Text>

            <LoginFormContainer onSuccess={this.onSuccessFormResult} />
          </View>

          <View style={commonStyles.flex} />

          {/* <BottomNav
            title="Don't have an account ?"
            linkTitle="Sign up"
            onPress={navigate('Signup')}
          /> */}
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
