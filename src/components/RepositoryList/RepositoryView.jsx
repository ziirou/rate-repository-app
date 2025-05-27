import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';
import { format } from 'date-fns';
import Text from '../Text';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';
import useRepository from '../../hooks/useRepository';

const REVIEW_RATING_SIZE = 50;

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    paddingBottom: 15,
    backgroundColor: theme.colors.itemBg,
  },
  reviewContainer: {
    flexDirection: 'row',
    gap: 5,
    padding: 10,
    backgroundColor: theme.colors.itemBg,
  },
  reviewInfo: {
    flexShrink: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  textHolder: {
    paddingTop: 10,
  },
  reviewRating: {
    width: REVIEW_RATING_SIZE,
    height: REVIEW_RATING_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 2,
    borderRadius: REVIEW_RATING_SIZE / 2,
    borderColor: theme.colors.primary,
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

const ReviewItem = ({ review }) => {
  if (!review) return null;

  const reviewDate = format(new Date(review.createdAt),'dd.MM.yyyy');
  const reviewText = review.text?.length > 0 ? review.text : undefined;

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewRating}>
        <Text fontWeight="bold" fontSize="subheading" color="blue">
          {review.rating}
        </Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
        <Text color="textSecondary">{reviewDate}</Text>
        {reviewText && (
          <View style={styles.textHolder}>
            <Text>{reviewText}</Text>
          </View>
        )}
      </View>
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
  )
};

export default RepositoryView;
