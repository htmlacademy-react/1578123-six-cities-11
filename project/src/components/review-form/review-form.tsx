import Rating from '../rating/rating';
import { RatingTitles } from '../../const';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectPostCommentStatus } from '../../store/comments/selectors';
import { ReviewData } from '../../types/reviews';
import { postCommentAction } from '../../store/api-actions';
import Spinner from '../spinner/spinner';

const commentLength = {
  MIN_COMMENT: 50,
  MAX_COMMENT: 300
};

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const [formData, setFormData] = useState({ rating: '', comment: '' });

  const { isLoading, isSuccess } = useAppSelector(selectPostCommentStatus);

  const clearForm = (): void => {
    setFormData({ rating: '', comment: '' });
  };

  useEffect(() => {
    if (isSuccess) {
      clearForm();
    }
  }, [isSuccess]);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = evt.target;

    setFormData((prevFormData) => ( {...prevFormData, [name]: value} ));
  };

  const onSubmit = (data: ReviewData): void => {
    dispatch(postCommentAction(data));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (id) {
      onSubmit({ id: Number(id), rating: Number(formData.rating), comment: formData.comment });
    }
  };

  const isCommentValid = (formData.comment.length > commentLength.MIN_COMMENT && formData.comment.length < commentLength.MAX_COMMENT);
  const isFormValid = isCommentValid && formData.rating;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">

        {RatingTitles.map(({ value, title }) => (
          <Rating
            key={value}
            handleFieldChange={handleFieldChange}
            rating={value}
            title={title}
            currentRating={formData.rating}
            isDisabled={isLoading}
          />
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={formData.comment}
        disabled={isLoading}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least {' '}<b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid && isLoading}
        >
          {isLoading ? <Spinner size='small' /> : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
