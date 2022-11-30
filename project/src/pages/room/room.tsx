import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoute, MAX_RATING } from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';

import BookmarksButton from '../../components/bookmarks-button/bookmarks-button';
import HostInformation from '../../components/host/host';
import Layout from '../../components/layout/layout';
import CardsList from '../../components/cards-list/cards-list';
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

  const property = offers.find((currentOffer) => currentOffer.id === Number(id));

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
      city,
      description,
      isFavorite,
      isPremium,
    } = property;

    const accomodationType = type.charAt(0).toUpperCase() + type.slice(1);
    const ratingPercentage = (rating * 100) / MAX_RATING;
    const nearPlaces = offers.filter((offer) => offer.id !== property.id).slice(0, 3);

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
              <Map className="property__map" offers={offers} city={city.location} selectedOffer={property.id} />
            </section>

            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">
                  Other places in the neighbourhood
                </h2>
                {nearPlaces.length && <CardsList offers={nearPlaces} place='near' />}
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
