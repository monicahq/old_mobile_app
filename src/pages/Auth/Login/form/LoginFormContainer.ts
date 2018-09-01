import {API} from '@api';
import {I18n} from '@i18n';
import {withFormik} from 'formik';
import {LoginForm} from './LoginForm';
import {IProps, IValues} from './LoginForm.model';

export const validate = ({email, password, url}) => {
  const errors: any = {};
  if (!email) {
    errors.email = 'common:form.required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'common:form.invalid';
  }
  if (!password) {
    errors.password = 'common:form.required';
  }
  if (!url) {
    errors.url = 'common:form.required';
  } else if (
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(
      url
    )
  ) {
    errors.url = 'common:form.invalid';
  }
  return errors;
};

export const LoginFormContainer = withFormik<IProps, IValues>({
  mapPropsToValues: props => ({
    email: '',
    password: '',
    url: __DEV__ ? 'https://staging.monicahq.com' : 'https://app.monicahq.com',
  }),
  validate,
  handleSubmit: async (
    {email, password, url},
    {setSubmitting, setStatus, props}
  ) => {
    setStatus();

    API.setUrl(url);

    try {
      const res = await API.User.login(email, password);
      if (res.access_token) {
        return props.onSuccess(res);
      }
      setStatus(I18n.t('auth:badCredentials'));
      setSubmitting(false);
    } catch (err) {
      setStatus(err.message);
      setSubmitting(false);
    }
  },
})(LoginForm);
