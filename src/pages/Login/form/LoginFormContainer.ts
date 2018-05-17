import {API} from '@api';
import {withFormik} from 'formik';
import {LoginForm} from './LoginForm';
import {IProps, IValues} from './LoginForm.model';

export const LoginFormContainer = withFormik<IProps, IValues>({
  mapPropsToValues: props => ({
    email: '',
    password: '',
    url: __DEV__ ? 'https://staging.monicahq.com' : 'https://app.monicahq.com',
  }),
  validate: ({email, password, url}) => {
    const errors: any = {};
    if (!email) {
      errors.email = 'common:form.required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'common:form.invalid';
    }
    if (!password) {
      errors.password = 'common:form.required';
    }
    if (!url) {
      errors.url = 'common:form.required';
    } else if (
      !/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
        url
      )
    ) {
      errors.url = 'common:form.invalid';
    }
    return errors;
  },
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
      setStatus('Bad credentials.');
      setSubmitting(false);
    } catch (err) {
      setStatus(err.message);
      setSubmitting(false);
    }
  },
})(LoginForm);
