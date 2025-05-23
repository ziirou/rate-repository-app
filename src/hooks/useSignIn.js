import { useContext } from 'react';
import { useMutation } from '@apollo/client';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    return await mutate({ variables: { credentials: { username, password } } });
  };

  return [signIn, result];
};

export default useSignIn;
