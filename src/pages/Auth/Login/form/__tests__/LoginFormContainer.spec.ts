import {validate} from '../LoginFormContainer';

// import {mapDispatchToProps} from '../LoginScreen';

// import {back, navigate} from '@redux/router';
// import {setToken} from '@redux/user';

describe('Pages', () => {
  describe('LoginFormContainer', () => {
    describe('validate', () => {
      describe('Email', () => {
        it('required', () => {
          const errors = validate({
            email: '',
            password: '',
            url: '',
          });
          expect(errors.email).toBe('common:form.required');
        });

        it('invalid', () => {
          const errors = validate({
            email: 'emailinvalide',
            password: '',
            url: '',
          });
          expect(errors.email).toBe('common:form.invalid');
        });

        it('valid', () => {
          const errors = validate({
            email: 'theo@gmail.com',
            password: '',
            url: '',
          });
          expect(errors.email).toBeUndefined();
        });
      });

      describe('Password', () => {
        it('required', () => {
          const errors = validate({
            email: '',
            password: '',
            url: '',
          });
          expect(errors.password).toBe('common:form.required');
        });

        it('valid', () => {
          const errors = validate({
            email: '',
            password: 'a',
            url: '',
          });
          expect(errors.password).toBeUndefined();
        });
      });

      describe('Url', () => {
        it('required', () => {
          const errors = validate({
            email: '',
            password: '',
            url: '',
          });
          expect(errors.url).toBe('common:form.required');
        });

        it('invalid', () => {
          const errors = validate({
            email: '',
            password: '',
            url: 'invalidurl',
          });
          expect(errors.url).toBe('common:form.invalid');
        });

        it('valid https', () => {
          let errors;
          errors = validate({
            email: '',
            password: '',
            url: 'https://monicahq.com',
          });
          expect(errors.url).toBeUndefined();

          errors = validate({
            email: '',
            password: '',
            url: 'https://app.monicahq.com',
          });
          expect(errors.url).toBeUndefined();
        });

        it('valid http', () => {
          let errors;
          errors = validate({
            email: '',
            password: '',
            url: 'http://monicahq.com',
          });
          expect(errors.url).toBeUndefined();

          errors = validate({
            email: '',
            password: '',
            url: 'http://app.monicahq.com',
          });
          expect(errors.url).toBeUndefined();
        });

        it('valid ip', () => {
          let errors;
          errors = validate({
            email: '',
            password: '',
            url: 'http://192.172.12.12',
          });
          expect(errors.url).toBeUndefined();

          errors = validate({
            email: '',
            password: '',
            url: 'http://192.168.1.150:4000',
          });
          expect(errors.url).toBeUndefined();
        });
      });
    });
  });
});
