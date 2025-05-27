import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useSignOut from '../hooks/useSignOut';

const SignOut = () => {
  const navigate = useNavigate();
  const signOut = useSignOut();

  useEffect(() => {
    (async () => {
      try {
        await signOut();
        navigate(-1, { replace: true });
      } catch (e) {
        console.log(e);
      }
    })();
  }, [signOut, navigate]);

  return null;
};

export default SignOut;
