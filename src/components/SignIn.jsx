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
    backgroundColor: theme.colors.fieldBg,
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

const FormikTextInput = ({ name, formik, ...props }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={[
        styles.inputField,
        formik.touched[name] && formik.errors[name] && {
          borderColor: theme.colors.error
        }
      ]}
      value={formik.values[name]}
      onChangeText={formik.handleChange(name)}
      onBlur={formik.handleBlur(name)}
      {...props}
    />
    {formik.touched[name] && formik.errors[name] && (
      <Text color="error">{formik.errors[name]}</Text>
    )}
  </View>
);

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        formik={formik}
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        formik={formik}
        placeholder="Password"
        secureTextEntry
      />
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
