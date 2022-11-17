import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';

import { AppRoute, MAX_RATING } from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';

import BookmarksButton from '../../components/bookmarks-button/bookmarks-button';
import HostInformation from '../../components/host/host';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import Reviews from '../../components/reviews/reviews';


type RoomProps = {
  offers: Offer[];
  reviews: Review[];
};

function Room({ offers, reviews }: RoomProps): JSX.Element {
  const params = useParams();
  const { id } = params;

  const property = offers.find((offer) => offer.id === Number(id));

  if (property) {
    const {
      title,
      type,
      price,
      rating,
      maxAdults,
      images,
      goods,
      bedrooms,
      host,
      description,
      isFavorite,
      isPremium,
    } = property;

    const accomodationType = type.charAt(0).toUpperCase() + type.slice(1);
    const ratingPercentage = (rating * 100) / MAX_RATING;

    return (
      <div className="page">
        <Helmet>
          <title>Six cities|Property</title>
        </Helmet>

        <Layout>
          <main className="page__main page__main--property">
            <section className="property">
              <PropertyGallery images={images} type={type} />
              <div className="property__container container">
                <div className="property__wrapper">
                  {isPremium && (
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  )}

                  <div className="property__name-wrapper">
                    <h1 className="property__name">{title}</h1>
                    <BookmarksButton
                      isActive={isFavorite ? '__bookmark-button--active' : false}
                      size="big"
                      page="property"
                    />
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{ width: `${ratingPercentage}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">
                      {rating}
                    </span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {accomodationType}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms}
                    </li>
                    <li className="property__feature property__feature--adults">
                      {maxAdults}
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">
                      What&apos;s inside
                    </h2>
                    <ul className="property__inside-list">
                      {goods.map((good) => (
                        <li key={good} className="property__inside-item">
                          {good}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <HostInformation host={host} description={description} />
                  <Reviews reviews={reviews} />
                </div>
              </div>
              <Map className="property__map" />
            </section>

            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                <div className="near-places__list places__list">
                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img
                          className="place-card__image"
                          src="img/room.jpg"
                          width="260"
                          height="200"
                          alt="Place image"
                        />
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;80</b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <BookmarksButton
                          isActive={isFavorite ? '__bookmark-button--active' : false}
                          page="place-card"
                          size="small"
                        />
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">Wood and stone place</Link>
                      </h2>
                      <p className="place-card__type">Private room</p>
                    </div>
                  </article>

                  <article className="near-places__card place-card">
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img
                          className="place-card__image"
                          src="img/apartment-02.jpg"
                          width="260"
                          height="200"
                          alt="Place image"
                        />
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;132</b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <BookmarksButton
                          isActive={isFavorite ? '__bookmark-button--active' : false}
                          size="small"
                          page="place-card"
                        />
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">Canal View Prinsengracht</Link>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>

                  <article className="near-places__card place-card">
                    <div className="place-card__mark">
                      <span>Premium</span>
                    </div>
                    <div className="near-places__image-wrapper place-card__image-wrapper">
                      <Link to="/#">
                        <img
                          className="place-card__image"
                          src="img/apartment-03.jpg"
                          width="260"
                          height="200"
                          alt="Place image"
                        />
                      </Link>
                    </div>
                    <div className="place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;180</b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <BookmarksButton
                          isActive={isFavorite ? '__bookmark-button--active' : false}
                          size="small"
                          page="place-card"
                        />
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <Link to="/#">Nice, cozy, warm big bed apartment</Link>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </Layout>
      </div>
    );
  }

  return <Navigate to={`${AppRoute.Root}${AppRoute.NotFound}`} />;
}

export default Room;
