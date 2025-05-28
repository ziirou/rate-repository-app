import { View, FlatList, Pressable, StyleSheet, Alert } from 'react-native';
import { useNavigate } from 'react-router';
import Text from './Text';
import theme from '../theme';
import ReviewItem from './ReviewItem';
import useCurrentUser from '../hooks/useCurrentUser';
import useReviewDelete from '../hooks/useReviewDelete';

const buttonStyle = {
  alignItems: 'center',
  borderRadius: 5,
  padding: 15,
  marginHorizontal: 10,
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  actionContainer: {
    display: 'flex',
    paddingBottom: 15,
    backgroundColor: theme.colors.itemBg,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  viewButton: {
    ...buttonStyle,
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    ...buttonStyle,
    flex: 1,
    backgroundColor: theme.colors.error,
  },
  textHolder: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewActions = ({ review, onViewPress, onDeletePress }) => {
  if (!review) return null;

  return (
    <View style={styles.actionContainer}>
      <ReviewItem review={review} />

      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.viewButton}
          onPress={() => onViewPress(review.repository.id)}
        >
          <Text fontWeight="bold" fontSize="subheading" color="white">
            View repository
          </Text>
        </Pressable>

        <Pressable
          style={styles.deleteButton}
          onPress={() => onDeletePress(review.id)}
        >
          <Text fontWeight="bold" fontSize="subheading" color="white">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const MyRewiews = () => {
  const navigate = useNavigate();
  const { userData, refetch: refetchUserData } = useCurrentUser(true);
  const [deleteReview] = useReviewDelete();

  if (!userData) {
    return (
      <Text style={styles.textHolder} fontSize="subheading">
        Not signed in
      </Text>
    );
  }

  const reviewEdges = userData.reviews?.edges;
  const reviewNodes = reviewEdges
    ? reviewEdges.map((edge) => edge.node)
    : [];

  if (!reviewNodes || reviewNodes.length === 0) {
    return (
      <Text style={styles.textHolder} fontSize="subheading">
        No reviews yet
      </Text>
    );
  }

  const onDeleteConfirm = async (id) => {
    try {
      await deleteReview(id);
      await refetchUserData();
    } catch (e) {
      console.log(e);
    }
  };

  const handleViewPress = (id) => {
    navigate(`/repository/${id}`, { replace: true });
  };

  const handleDeletePress = (id) => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => onDeleteConfirm(id),
        },
      ]
    );
  };

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <ReviewActions
          review={item}
          onViewPress={handleViewPress}
          onDeletePress={handleDeletePress}
        />
      )}
    />
  );
};

export default MyRewiews;
