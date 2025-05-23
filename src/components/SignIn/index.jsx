import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    console.log(values);
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
