import {withFormik} from 'formik';
import {LoginForm} from './LoginForm';
import {API} from 'api';

export const LoginFormContainer = withFormik({
  isInitialValid: true,
  mapPropsToValues: props => ({
    email: 'theo.matl.com',
    password: '',
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
  handleSubmit: ({email, password}, {setSubmitting, setStatus, props}) => {
    setStatus();

    API.User.login(email, password)
      .then(res => {
        if (res.status === 1) {
          return props.onSuccess(res);
        }

        setStatus('Bad credentials.');
        setSubmitting(false);
      })
      .catch(err => {
        setStatus(err.message);
        setSubmitting(false);
      });
  },
})(LoginForm);
