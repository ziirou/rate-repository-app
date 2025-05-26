import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const [repositories, setRepositories] = useState();

  useEffect(() => {
    if (data && data.repositories) {
      setRepositories(data.repositories);
    }
  }, [data]);

  if (loading) {
    console.log('loading repositories');
  }

  if (error) {
    console.log(error);
  }

  return { repositories, error, loading, refetch };
};

export default useRepositories;
