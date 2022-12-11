import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/comments/selectors';
import { getAuthorizationStatus } from '../../store/user/selectors';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';

function Reviews(): JSX.Element {
  const reviews = useAppSelector(getComments);
  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      {authStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Reviews;
