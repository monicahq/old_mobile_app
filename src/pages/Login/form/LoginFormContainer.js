import {withFormik} from 'formik';
import {LoginForm} from './LoginForm';
import {API} from 'api';

export const LoginFormContainer = withFormik({
  isInitialValid: true,
  mapPropsToValues: props => ({
    email: 'theo.mathieu1@gmail.com',
    password: 'abab1598',
  }),
  validate: ({email, password}) => {
    const errors = {};
    if (!email) {
      errors.email = 'Is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Is invalid';
    }
    if (!password) {
      errors.password = 'Is required';
    }
    return errors;
  },
  handleSubmit: async (
    {email, password},
    {setSubmitting, setStatus, props},
  ) => {
    setStatus();

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
