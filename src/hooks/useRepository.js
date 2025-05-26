import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading, refetch } = useQuery(
      GET_SINGLE_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables: { 'id': id }
    }
  );

  const [repository, setRepository] = useState();

  useEffect(() => {
    if (data && data.repository) {
      setRepository(data.repository);
    }
  }, [data]);

  if (loading) {
    console.log('loading single repository');
  }

  if (error) {
    console.log(error);
  }

  return { repository, error, loading, refetch };
};

export default useRepository;
