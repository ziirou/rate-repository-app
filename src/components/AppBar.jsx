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

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('AppBar pressed')}>
        <Text fontWeight="bold" fontSize="subheading" color="textWhite">Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
