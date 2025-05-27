import { View, Image, StyleSheet } from 'react-native';
import emoji from 'emoji-dictionary';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    padding: 15,
    backgroundColor: theme.colors.itemBg,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  infoTab: {
    flexShrink: 1,
    gap: 5,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  statsTab: {
    alignItems: 'center',
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

const InfoTab = ({ info: { fullName, description, language } }) => {
  const descWithEmojis = description.replace(/:([a-zA-Z0-9_+-]+):/g,
    (match) => emoji.getUnicode(match) || match
  );

  return (
    <View style={styles.infoTab}>
      <Text
        testID="fullName"
        fontWeight="bold"
        fontSize="subheading"
      >
        {fullName}
      </Text>
      <Text
        testID="description"
        color="textSecondary"
      >
        {descWithEmojis}
      </Text>
      <Text
        testID="language"
        style={styles.languageTag}
        color="white"
      >
        {language}
      </Text>
    </View>
  );
};

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

const StatsTab = ({ text, number, testID }) => {
  const roundNumber = (number) => {
    if (number >= 1000) {
      return (`${Math.round(number / 1000 * 10) / 10}k`);
    } else {
      return number;
    }
  };

  return (
    <View style={styles.statsTab}>
      <Text testID={testID} fontWeight="bold">{roundNumber(number)}</Text> 
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

const StatsContainer = ({
  item: { stargazersCount, forksCount, reviewCount, ratingAverage }
}) => (
  <View style={styles.statsContainer}>
    <StatsTab testID="stargazersCount" text="Stars" number={stargazersCount} />
    <StatsTab testID="forksCount" text="Forks" number={forksCount} />
    <StatsTab testID="reviewCount" text="Reviews" number={reviewCount} />
    <StatsTab testID="ratingAverage" text="Rating" number={ratingAverage} />
  </View>
);

const RepositoryItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.mainContainer}>
    <InfoContainer item={item} />
    <StatsContainer item={item} />
  </View>
);

export default RepositoryItem;
