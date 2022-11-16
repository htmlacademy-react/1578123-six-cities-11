import React, { Fragment, ChangeEvent } from 'react';

type RatingProps = {
  handleFieldChange: (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rating: string;
  title: string | undefined;
};

function Rating({ handleFieldChange, rating, title }: RatingProps): JSX.Element {
  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        onChange={handleFieldChange}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default Rating;
