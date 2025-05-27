import { TextInput, View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  inputField: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.fieldBg,
    fontFamily: theme.fonts.main,
  },
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

export default FormikTextInput;
