import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
});

const RepositoryItem = ({item}) => (
  <View style={styles.flexContainer}>
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
