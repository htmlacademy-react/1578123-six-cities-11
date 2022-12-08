import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import Layout from '../../components/layout/layout';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page">

      <Helmet>
        <title>Six cities|Favorites</title>
      </Helmet>

      <Layout>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={offers} />
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Logo type="footer" />
        </footer>
      </Layout>
    </div>
  );
}

export default Favorites;
