import { useNavigate } from "react-router";
import SignInForm from './SignInForm';
import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
  const navigate = useNavigate();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate(-1);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
