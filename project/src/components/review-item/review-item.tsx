import { Review } from '../../types/reviews';
import dayjs from 'dayjs';
import { MAX_RATING } from '../../const';

type ReviewItemProps = {
  review: Review;
};

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { id, comment, author, date, rating } = review;

  const commentDate = dayjs(date).format('MMMM YYYY');
  const ratingPercentage = (rating * 100) / MAX_RATING;

  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={author.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{author.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingPercentage}`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{commentDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
