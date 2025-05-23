import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const roundNumber = (number) => {
  if (number >= 1000) {
    return (`${Math.round(number / 1000 * 10) / 10}k`);
  } else {
    return number;
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: theme.colors.itemBg,
  },
  infoContainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  infoTab: {
    flexShrink: 1,
    gap: 5,
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  statsTab: {
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  languageTag: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: theme.colors.primary,
  },
});

const InfoTab = ({ info: { fullName, description, language } }) => (
  <View style={styles.infoTab}>
    <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
    <Text color="textSecondary">{description}</Text>
    <Text style={styles.languageTag} color="white">{language}</Text>
  </View>
);

const InfoContainer = ({
  item: { ownerAvatarUrl, fullName, description, language }
}) => (
  <View style={styles.infoContainer}>
    <Image
      style={styles.avatar}
      source={{ uri: ownerAvatarUrl }}
    />
    <InfoTab info={{ fullName, description, language }} />
  </View>
);

const StatsTab = ({ text, number }) => (
  <View style={styles.statsTab}>
    <Text fontWeight="bold">{roundNumber(number)}</Text> 
    <Text color="textSecondary">{text}</Text>
  </View>
);

const StatsContainer = ({
  item: { stargazersCount, forksCount, reviewCount, ratingAverage }
}) => (
  <View style={styles.statsContainer}>
    <StatsTab text="Stars" number={stargazersCount} />
    <StatsTab text="Forks" number={forksCount} />
    <StatsTab text="Reviews" number={reviewCount} />
    <StatsTab text="Rating" number={ratingAverage} />
  </View>
);

const RepositoryItem = ({ item }) => (
  <View style={styles.mainContainer}>
    <InfoContainer item={item} />
    <StatsContainer item={item} />
  </View>
);

export default RepositoryItem;
