import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {TextInput, Button} from 'components';
import {commonStyles} from 'theme';

export class LoginForm extends Component {
  static propTypes = {
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    setTouched: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    status: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
  };

  passwordTextInput = {};

  setFieldValue = fieldName => text =>
    this.props.setFieldValue(fieldName, text);
  setFieldTouched = fieldName => () => this.props.setFieldTouched(fieldName);
  setAllTouched = () => this.props.setTouched({email: true, password: true});
  focusField = inputName => () => this[inputName].focus();

  getEmailField() {
    const {values, touched, errors} = this.props;

    return (
      <TextInput
        key={0}
        title="Your email"
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

  getPasswordField() {
    const {values, touched, errors, isValid, handleSubmit} = this.props;

    return (
      <TextInput
        key={1}
        ref={c => (this.passwordTextInput = c)}
        title="Your password"
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

  render() {
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
