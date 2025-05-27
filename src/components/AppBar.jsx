import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import Text from './Text';
import theme from '../theme';
import { GET_CURRENT_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
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

const AppBarTab = ({ text, url, show }) => {
  if (!show) {
    return null;
  }

  return (
    <Link to={url} component={Pressable} style={styles.tab}>
      <Text fontWeight="bold" fontSize="subheading" color="white">
        {text}
      </Text>
    </Link>
  );
};

const AppBar = () => {
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  });

  const loggedIn = data && data.me;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" url="/" show={true} />
        <AppBarTab text="Create a review" url="/create-review" show={loggedIn} />
        <AppBarTab text="Sign in" url="/sign-in" show={!loggedIn} />
        <AppBarTab text="Sign out" url="/sign-out" show={loggedIn} />
      </ScrollView>
    </View>
  );
};

export default AppBar;
