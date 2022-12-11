import { generatePath, Link } from 'react-router-dom';
import { AppRoute, MAX_RATING } from '../../const';
import { Offer } from '../../types/offers';
import BookmarksButton from '../bookmarks-button/bookmarks-button';

import classsNames from 'classnames';

type CardItemProps = {
  offer: Offer;
  onOfferMouseEnter?: (offerId: number | null) => void;
  place: 'city' | 'near' | 'favorite';
};

const classes = {
  city: {
    className: 'cities',
    imgWidth: 260,
    imgHeight: 200
  },
  near: {
    className: 'near-places',
    imgWidth: 260,
    imgHeight: 200
  },
  favorite: {
    className: 'favorites',
    imgWidth: 150,
    imgHeight: 110
  }
};

function CardItem({ offer, onOfferMouseEnter, place }: CardItemProps): JSX.Element {
  const { className, imgWidth, imgHeight } = classes[place];
  const { id, title, type, price, rating, previewImg, isFavorite, isPremium } = offer;

  const infoClassName = classsNames('place-card__info', { 'favorites__card-info': place === 'favorite' });

  const accomodationType = type.charAt(0).toUpperCase() + type.slice(1),
    ratingPercentage = (Math.round(rating) * 100) / MAX_RATING;

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={() => onOfferMouseEnter?.(id)}
      onMouseLeave={() => onOfferMouseEnter?.(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Offer, { id: String(id)})}>
          <img
            className="place-card__image"
            src={previewImg}
            width={imgWidth}
            height={imgHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={infoClassName}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarksButton
            isActive={isFavorite ? '__bookmark-button--active' : false}
            size="small"
            page="place-card"
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercentage}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { id: String(id)})}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{accomodationType}</p>
      </div>
    </article>
  );
}

export default CardItem;
