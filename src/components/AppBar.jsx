import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: theme.colors.appBarBg,
  },
});

const AppBarTab = () => {
  return (
    <Pressable onPress={() => console.log('AppBar pressed')}>
      <Text fontWeight="bold" fontSize="subheading" color="white">Repositories</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab />
    </View>
  );
};

export default AppBar;
