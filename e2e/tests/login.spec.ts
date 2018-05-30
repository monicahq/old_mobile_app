import {I18n} from '../i18n';
import {Form} from '../services/form';
import {LoginPage} from '../services/login';

describe('Login', () => {
  beforeEach(async () => {
    await LoginPage.get();
  });

  describe('Email field', () => {
    it('should be required', async () => {
      await Form.checkRequired('email');
    });

    it('should work with a real email', async () => {
      await Form.checkIsValid('email', 'mokto@github.com');
    });

    it('should not work with a false email', async () => {
      await Form.checkIsNotValid('email', 'mokto', 'common:form.invalid');
    });
  });

  describe('Password field', () => {
    it('should be required', async () => {
      await Form.checkRequired('password');
    });

    it('should work with a real password', async () => {
      await Form.checkIsValid('password', 'aaaaa');
    });
  });

  describe('Url field', () => {
    it('should be required', async () => {
      await Form.checkRequired('url');
    });

    it('should work with a real url', async () => {
      await Form.checkIsValid('url', 'https://api.monicahq.com');
      await Form.checkIsValid('url', 'https://monicahq.com');
    });

    it('should not work with a false url', async () => {
      await Form.checkIsNotValid('url', 'myurl', 'common:form.invalid');
    });
  });

  describe('Login Form', () => {
    it('invalid submission', async () => {
      await Form.setValue('email', 'emailnotworking@fake.com');
      await Form.setValue('password', 'aaaa');
      await Form.setValue('url', 'https://app.monicahq.com');
      await Form.submit();
      await Form.checkFormResult('auth:badCredentials');
    });
  });
});
