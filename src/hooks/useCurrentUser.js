import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../graphql/queries';

const useCurrentUser = (includeReviews) => {
  const variables = includeReviews ? {
    includeReviews,
    first: 8,
  } : {};

  const { data, error, loading, refetch, fetchMore, ...result } = useQuery(
    GET_CURRENT_USER, {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  if (loading) {
    console.log('loading current user');
  }

  if (error) {
    console.log(error);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.me.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    userData: data?.me,
    refetch,
    fetchMore: handleFetchMore,
    error,
    loading,
    ...result,
  };
};

export default useCurrentUser;
