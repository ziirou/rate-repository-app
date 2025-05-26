import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import RepositoryView from './RepositoryList/RepositoryView';
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
        <Route path="/repository/:id" element={<RepositoryView />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-out" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
