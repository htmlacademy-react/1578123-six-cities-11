import { useAppSelector } from '../../hooks';
import { selectSortedComments } from '../../store/comments/selectors';
import ReviewItem from '../review-item/review-item';

function ReviewList(): JSX.Element {
  const reviews = useAppSelector(selectSortedComments);

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewList;
