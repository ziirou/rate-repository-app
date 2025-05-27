import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirm: '',
  };

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, 'Username must be at least 5 characters long')
      .max(30, 'Username must be a maximum of 30 characters long')
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'Password must be at least 5 characters long')
      .max(50, 'Password must be a maximum of 50 characters long')
      .required('Password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <SignUpForm />}
    </Formik>
  );
};

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
