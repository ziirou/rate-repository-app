import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
  },
});

const RepositoryItem = ({item}) => (
  <View>
    <Text style={styles.item}>Full name: {item.fullName}</Text>
    <Text style={styles.item}>Description: {item.description}</Text>
    <Text style={styles.item}>Language: {item.language}</Text>
    <Text style={styles.item}>Stars: {item.stargazersCount}</Text>
    <Text style={styles.item}>Forks: {item.forksCount}</Text>
    <Text style={styles.item}>Reviews: {item.reviewCount}</Text>
    <Text style={styles.item}>Rating: {item.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;
