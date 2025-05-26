import { View, Pressable, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import Text from '../Text';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: theme.colors.itemBg,
  },
  openButton: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: theme.colors.primary,
  },
});

const RepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return null;

  return (
    <View style={styles.mainContainer}>
      <RepositoryItem item={repository} />
      <Pressable
        style={styles.openButton}
        onPress={() => Linking.openURL(repository.url)}
      >
        <Text fontSize="subheading" color="white">
          Open in GitHub
        </Text>
      </Pressable>
    </View>
  )
};

export default RepositoryView;
