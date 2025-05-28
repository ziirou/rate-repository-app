import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import Text from './Text';
import theme from '../theme';

const REVIEW_RATING_SIZE = 50;

const styles = StyleSheet.create({
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
});

const ReviewItem = ({ review }) => {
  if (!review) return null;

  const reviewDate = format(new Date(review.createdAt),'dd.MM.yyyy');
  const reviewText = review.text?.length > 0 ? review.text : undefined;
  const infoHeading = review.user?.username || review.repository?.fullName;

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewRating}>
        <Text fontWeight="bold" fontSize="subheading" color="blue">
          {review.rating}
        </Text>
      </View>
      <View style={styles.reviewInfo}>
        <Text fontWeight="bold" fontSize="subheading">{infoHeading}</Text>
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

export default ReviewItem;
