import {Button, TextInput} from '@components';
import {commonStyles} from '@theme';
import {InjectedFormikProps} from 'formik';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

import {IProps, IValues} from './LoginForm.model';

export class LoginForm extends PureComponent<
  InjectedFormikProps<IProps, IValues>,
  {}
> {
  public passwordTextInput = {};

  public setFieldValue = fieldName => text =>
    this.props.setFieldValue(fieldName, text);
  public setFieldTouched = fieldName => () =>
    this.props.setFieldTouched(fieldName);
  public setAllTouched = () =>
    this.props.setFieldTouched('email') &&
    this.props.setFieldTouched('password');

  public focusField = inputName => () => this[inputName].focus();

  public getEmailField() {
    const {values, touched, errors} = this.props;

    return (
      <TextInput
        key={0}
        title="Your email"
        // @ts-ignore: TODO wait for react-native @types to be updated
        keyboardType="email-address"
        placeholder="email@example.com"
        returnKeyType="next"
        onChangeText={this.setFieldValue('email')}
        onSubmitEditing={this.focusField('passwordTextInput')}
        onBlur={this.setFieldTouched('email')}
        value={values.email}
        touched={touched.email}
        error={errors.email}
      />
    );
  }

  public passwordTextInputRef = ref => (this.passwordTextInput = ref);

  public getPasswordField() {
    const {values, touched, errors, isValid, handleSubmit} = this.props;

    return (
      <TextInput
        key={1}
        ref={this.passwordTextInputRef}
        title="Your password"
        // @ts-ignore: TODO wait for react-native @types to be updated
        returnKeyType="send"
        secureTextEntry={true}
        onChangeText={this.setFieldValue('password')}
        onSubmitEditing={isValid ? handleSubmit : null}
        onBlur={this.setFieldTouched('password')}
        value={values.password}
        touched={touched.password}
        error={errors.password}
      />
    );
  }

  public render() {
    const {handleSubmit, isValid, isSubmitting, status} = this.props;

    return [
      this.getEmailField(),
      this.getPasswordField(),
      <Button
        key={2}
        onPress={isValid ? handleSubmit : this.setAllTouched}
        title="Sign in"
        loadingTitle="Signin in"
        disabled={isSubmitting}
        loading={isSubmitting}
      />,
      status ? (
        <Text key={3} style={commonStyles.errorMessage}>
          {status}
        </Text>
      ) : null,
    ];
  }
}
