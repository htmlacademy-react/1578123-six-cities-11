import { Review } from '../../types/reviews';
import ReviewForm from '../review-form/review-form';
import ReviewList from '../review-list/review-list';


type ReviewProps = {
  reviews: Review[];
};

function Reviews({ reviews }: ReviewProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{" "}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </section>
  );
}

export default Reviews;
