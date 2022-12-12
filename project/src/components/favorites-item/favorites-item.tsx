import { generatePath, Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { postFavoritesAction } from '../../store/api-actions';
import { Offer } from '../../types/offers';
import { getAccomodationType, getRatingPercentage } from '../../utils';
import BookmarksButton from '../bookmarks-button/bookmarks-button';

type FavoritesItemProps = {
  offer: Offer;
};

function FavoritesItem({ offer }: FavoritesItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { id, title, type, price, rating, previewImg, isPremium, isFavorite } = offer;

  const accomodationType = getAccomodationType(type);
  const ratingPercentage = getRatingPercentage(rating);

  const handleFavoriteBtnClick = () => {
    dispatch(postFavoritesAction({ id, status: Number(!isFavorite) }));
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Root}${generatePath(AppRoute.Offer, { id: String(id)})}`}>
          <img
            className="place-card__image"
            src={previewImg}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarksButton
            isActive={isFavorite}
            size="small"
            page="place-card"
            onClick={handleFavoriteBtnClick}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercentage}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Root}${generatePath(AppRoute.Offer, { id: String(id)})}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{accomodationType}</p>
      </div>
    </article>
  );
}

export default FavoritesItem;
