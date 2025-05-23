import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SignOut from './SignOut';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBg,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="sign-in">
          <Route index element={<SignIn />} />
          <Route path="*" element={<SignIn />} />
        </Route>
        <Route path="sign-out">
          <Route index element={<SignOut />} />
          <Route path="*" element={<SignOut />} />
        </Route>
      </Routes>
    </View>
  );
};

export default Main;
