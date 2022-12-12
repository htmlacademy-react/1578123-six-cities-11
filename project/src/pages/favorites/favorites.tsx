import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';
import Layout from '../../components/layout/layout';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites, getFavoritesFetchStatus } from '../../store/favorites/selectors';
import { FetchStatus } from '../../const';
import { FullPageSpinner } from '../../components/fullpage-spinner/fullpage-spinner';
import ErrorScreen from '../error-screen/error-screen';
import FavoritesEmptyList from '../../components/favorites-empty-list/favorites-empty-list';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const fetchStatus = useAppSelector(getFavoritesFetchStatus);
  const favoriteOffers = useAppSelector(getFavorites);

  switch (fetchStatus) {
    case FetchStatus.Pending:
      return <FullPageSpinner size="big" />;
    case FetchStatus.Error:
      return <ErrorScreen />;
    default:
      return (
        <div className="page">
          <Helmet>
            <title>Six cities|Favorites</title>
          </Helmet>

          <Layout>
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                {!favoriteOffers.length ? (
                  <FavoritesEmptyList />
                ) : (
                  <section className="favorites">
                    <h1 className="favorites__title">Saved listing</h1>
                    <FavoritesList offers={favoriteOffers} />
                  </section>
                )}
              </div>
            </main>
            <footer className="footer container">
              <Logo type="footer" />
            </footer>
          </Layout>
        </div>
      );
  }
}

export default Favorites;
