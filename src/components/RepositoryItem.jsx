import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
});

const RepositoryItem = ({item}) => (
  <View style={styles.flexContainer}>
    <View style={styles.flexItemA}>
      <Text>Flex item A</Text>
    </View>
    <View style={styles.flexItemB}>
      <Text>Flex item B</Text>
    </View>
    <Text fontWeight="bold" fontSize="subheading">Full name: {item.fullName}</Text>
    <Text color="textSecondary">Description: {item.description}</Text>
    <Text color="primary">Language: {item.language}</Text>
    <Text color="textSecondary">Stars: {item.stargazersCount}</Text>
    <Text color="textSecondary">Forks: {item.forksCount}</Text>
    <Text color="textSecondary">Reviews: {item.reviewCount}</Text>
    <Text color="textSecondary">Rating: {item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
