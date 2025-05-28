import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, searchQuery) => {
  let variables = {
    searchKeyword: searchQuery ? searchQuery : undefined,
    first: 3,
    after: undefined, // TODO: do in Exercise 10.27
  };

  switch (sorting) {
    case 'highestRated':
      variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      break;
    case 'lowestRated':
      variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      break;
    default:
      variables = { ...variables, orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
  }

  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  if (loading) {
    console.log('loading repositories');
  }

  if (error) {
    console.log(error);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;
