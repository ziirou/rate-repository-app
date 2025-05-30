import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const variables = {
    id,
    first: 8,
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_SINGLE_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  if (loading) {
    console.log('loading single repository');
  }

  if (error) {
    console.log(error);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data?.repository,
    fetchMore: handleFetchMore,
    error,
    loading,
    ...result,
  };
};

export default useRepository;
