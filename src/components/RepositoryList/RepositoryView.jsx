import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import Text from '../Text';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';
import ReviewItem from '../ReviewItem';
import useRepository from '../../hooks/useRepository';

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    paddingBottom: 15,
    backgroundColor: theme.colors.itemBg,
  },
  separator: {
    height: 10,
  },
  openButton: {
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 15,
    backgroundColor: theme.colors.primary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.infoContainer}>
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
  );
};

const RepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return null;

  const reviewEdges = repository.reviews.edges;
  const reviewNodes = reviewEdges
    ? reviewEdges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <>
          <RepositoryInfo repository={repository} />
          <ItemSeparator />
        </>
      )}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
};

export default RepositoryView;
