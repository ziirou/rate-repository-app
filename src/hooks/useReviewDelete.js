import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useReviewDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (deleteReviewId) => {
    const response = await mutate({ variables: { deleteReviewId } });

    return response;
  };

  return [deleteReview, result];
};

export default useReviewDelete;
