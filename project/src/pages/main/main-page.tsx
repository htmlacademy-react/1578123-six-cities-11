import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getOffersByCity, getSortedOffers } from '../../offer';

import Layout from '../../components/layout/layout';
import SortingForm from '../../components/sorting-form/sorting-form';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesMenu from '../../components/cities-menu/cities-menu';
import { getCity, getSortingType } from '../../store/ui/selectors';
import { getOffers } from '../../store/offers/selectors';
import MainEmpty from '../main-empty/main-empty';

function MainPage(): JSX.Element {
  const [currentOffer, setActiveOffer] = useState<number | null>(null);

  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const sortingType = useAppSelector(getSortingType);

  if (!offers.length) {
    return <MainEmpty currentCity={currentCity} />;
  }

  const offersByCity = getOffersByCity(currentCity, offers);
  const sortedOffers = getSortedOffers(offersByCity, sortingType);
  const location = offersByCity[0].city.location;

  const handleOfferMouseEnter = (offerId: number | null) => setActiveOffer(offerId);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>

      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesMenu currentCity={currentCity} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersByCity.length} places to stay in {currentCity}</b>
                <SortingForm />
                <CardsList offers={sortedOffers} place='city' onOfferMouseEnter={handleOfferMouseEnter} />
              </section>
              <div className="cities__right-section">
                <Map className="cities__map" offers={offersByCity} city={location} selectedOffer={currentOffer} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default MainPage;
