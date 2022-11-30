import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { Offer } from '../../types/offers';

import Layout from '../../components/layout/layout';
import SortingForm from '../../components/sorting-form/sorting-form';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesMenu from '../../components/cities-menu/cities-menu';

type MainPageProps = {
  offers: Offer[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [currentOffer, setActiveOffer] = useState<number | null>(null);

  const { location } = offers[0].city;

  const handleOfferMouseEnter = (offerId: number | null) => setActiveOffer(offerId);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities</title>
      </Helmet>

      <Layout>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CitiesMenu />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
                <SortingForm />
                <CardsList offers={offers} place='city' onOfferMouseEnter={handleOfferMouseEnter} />
              </section>
              <div className="cities__right-section">
                <Map className="cities__map" offers={offers} city={location} selectedOffer={currentOffer} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default MainPage;
