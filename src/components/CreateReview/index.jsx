import { useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';
import useCreateReview from '../../hooks/useCreateReview';

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    reviewText: '',
  };

  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .min(2, 'Repository owner name must be longer than 1 character')
      .required('Repository owner name is required'),
    repositoryName: yup
      .string()
      .min(2, 'Repository name must be longer than 1 character')
      .required('Repository name is required'),
    rating: yup
      .number()
      .min(0, 'Rating must more than 0')
      .max(100, 'Rating must less than 100')
      .required('Rating is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <ReviewForm />}
    </Formik>
  );
};

const CreateReview = () => {
  const navigate = useNavigate();
  const [createReview] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, reviewText } = values;

    try {
      const result = await createReview({ ownerName, repositoryName, rating, reviewText });
      navigate(`/repository/${result.data.createReview.repositoryId}`, { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
