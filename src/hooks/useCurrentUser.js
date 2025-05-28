import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews) => {
  const { data, error, loading, refetch } = useQuery(
    GET_CURRENT_USER, {
      fetchPolicy: 'cache-and-network',
      variables: { includeReviews }
    }
  );

  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(data?.me);
  }, [data]);

  if (loading) {
    console.log('loading current user');
  }

  if (error) {
    console.log(error);
  }

  return { userData, error, loading, refetch };
};

export default useCurrentUser;
