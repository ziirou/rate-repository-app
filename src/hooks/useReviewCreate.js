import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReviewCreate = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, reviewText }) => {
    const response = await mutate({
      variables: { review: { 
        ownerName,
        repositoryName,
        rating: parseInt(rating),
        text: reviewText,
      } },
    });

    return response;
  };

  return [createReview, result];
};

export default useReviewCreate;
