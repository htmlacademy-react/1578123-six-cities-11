import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import { Review } from '../../types/reviews';

import MainPage from '../../pages/main/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page_404/page-404';
import PrivateRoute from '../private-route/private-route';

import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { FullPageSpinner } from '../fullpage-spinner/fullpage-spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: Review[];
};

function App({ reviews }: AppScreenProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <FullPageSpinner size='big' />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<MainPage />} />
            <Route
              path={AppRoute.Login}
              element={<Login />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Room reviews={reviews}/>} />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
