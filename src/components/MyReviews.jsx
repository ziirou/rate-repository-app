import { View, FlatList, StyleSheet } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import useCurrentUser from '../hooks/useCurrentUser';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  textHolder: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyRewiews = () => {
  const { userData } = useCurrentUser(true);

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

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  )
};

export default MyRewiews;
