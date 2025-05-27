import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting) => {
  let variables = {};

  switch (sorting) {
    case 'highestRated':
      variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      break;
    case 'lowestRated':
      variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      break;
    default:
      variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
  }

  const { data, error, loading, refetch } = useQuery(
    GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

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
