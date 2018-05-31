import {InjectedFormikProps} from 'formik';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

import {Button, TextInput} from '@components';
import {I18n} from '@i18n';
import {commonStyles} from '@theme';
import {IProps, IValues} from './LoginForm.model';

export class LoginForm extends PureComponent<
  InjectedFormikProps<IProps, IValues>,
  {}
> {
  public passwordTextInput = {};
  public urlTextInput = {};

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
        id="email"
        key={0}
        title={I18n.t('auth:yourEmail')}
        keyboardType="email-address"
        placeholder={I18n.t('auth:emailPlaceholder')}
        returnKeyType="next"
        onChangeText={this.setFieldValue('email')}
        onSubmitEditing={this.focusField('passwordTextInput')}
        onBlur={this.setFieldTouched('email')}
        value={values.email}
        touched={touched.email}
        error={I18n.t(errors.email)}
      />
    );
  }

  public passwordTextInputRef = ref => (this.passwordTextInput = ref);

  public getPasswordField() {
    const {values, touched, errors} = this.props;

    return (
      <TextInput
        id="password"
        key={1}
        ref={this.passwordTextInputRef}
        title={I18n.t('auth:yourPassword')}
        returnKeyType="next"
        secureTextEntry={true}
        onChangeText={this.setFieldValue('password')}
        onSubmitEditing={this.focusField('urlTextInput')}
        onBlur={this.setFieldTouched('password')}
        value={values.password}
        touched={touched.password}
        error={I18n.t(errors.password)}
      />
    );
  }

  public urlTextInputRef = ref => (this.urlTextInput = ref);

  public getUrlField() {
    const {values, touched, errors, isValid, handleSubmit} = this.props;

    return (
      <TextInput
        id="url"
        key={2}
        ref={this.urlTextInputRef}
        title={I18n.t('common:yourMonicaUrl')}
        returnKeyType="send"
        onChangeText={this.setFieldValue('url')}
        onSubmitEditing={isValid ? handleSubmit : null}
        onBlur={this.setFieldTouched('url')}
        value={values.url}
        touched={touched.url}
        error={I18n.t(errors.url)}
      />
    );
  }

  public render() {
    const {handleSubmit, isValid, isSubmitting, status} = this.props;

    return [
      this.getEmailField(),
      this.getPasswordField(),
      this.getUrlField(),
      <Button
        id="submit"
        key={3}
        onPress={isValid ? handleSubmit : this.setAllTouched}
        title={I18n.t('auth:signin')}
        loadingTitle={I18n.t('auth:signinIn')}
        disabled={isSubmitting}
        loading={isSubmitting}
      />,
      status ? (
        <Text testID="formResult" key={4} style={commonStyles.errorMessage}>
          {status}
        </Text>
      ) : null,
    ];
  }
}
