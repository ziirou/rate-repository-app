import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: 'grey',
    fontSize: 14,
  },
  blueText: {
    color: 'blue',
  },
  bigText: {
    fontSize: 24,
    fontWeight: '700',
  },
});

const FancyText = ({ isBlue, isBig, children }) => {
  const textStyles = [
    styles.text,
    isBlue && styles.blueText,
    isBig && styles.bigText,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const RepositoryItem = ({item}) => (
  <View style={styles.container}>
    <FancyText isBig>Full name: {item.fullName}</FancyText>
    <FancyText>Description: {item.description}</FancyText>
    <FancyText isBlue>Language: {item.language}</FancyText>
    <FancyText>Stars: {item.stargazersCount}</FancyText>
    <FancyText>Forks: {item.forksCount}</FancyText>
    <FancyText>Reviews: {item.reviewCount}</FancyText>
    <FancyText>Rating: {item.ratingAverage}</FancyText>
  </View>
);

export default RepositoryItem;
