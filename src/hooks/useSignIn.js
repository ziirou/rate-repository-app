import { useMutation } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { credentials: { username, password } } });
  };

  return [signIn, result];
};

export default useSignIn;
