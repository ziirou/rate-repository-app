import { Pressable, View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    backgroundColor: theme.colors.formBg,
  },
  button: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    backgroundColor: theme.colors.primary,
  },
});

const ReviewForm = () => {
  const formik = useFormikContext();

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        formik={formik}
        placeholder="Repository owner name"
      />
      <FormikTextInput
        name="repositoryName"
        formik={formik}
        placeholder="Repository name"
      />
      <FormikTextInput
        name="rating"
        formik={formik}
        placeholder="Rating between 0 and 100"
        keyboardType="numeric"
      />
      <FormikTextInput
        name="reviewText"
        formik={formik}
        placeholder="Review"
        multiline
      />
      <Pressable
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text fontWeight="bold" fontSize="subheading" color="white">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
