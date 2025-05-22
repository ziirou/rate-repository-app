import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 15,
    backgroundColor: theme.colors.formBg,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputField: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  button: {
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    backgroundColor: theme.colors.primary,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must be longer than 1 character')
    .required('Username is required'),
  password: yup
    .string()
    .min(2, 'Password must be longer than 1 character')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.inputField,
            formik.touched.username && formik.errors.username && {
              borderColor: theme.colors.error
            }
          ]}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="error">{formik.errors.username}</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.inputField,
            formik.touched.password && formik.errors.password && {
              borderColor: theme.colors.error
            }
          ]}
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="error">{formik.errors.password}</Text>
        )}
      </View>

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text fontWeight="bold" fontSize="subheading" color="white">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
