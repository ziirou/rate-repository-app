import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
  },
  tab: {
    flexGrow: 0,
    padding: 10,
    borderRadius: 5,
  },
});

const AppBarTab = ({ text, url }) => {
  return (
    <Link to={url} component={Pressable} style={styles.tab}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        {text}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" url="/" />
        <AppBarTab text="Sign in" url="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
