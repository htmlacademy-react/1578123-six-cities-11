import { Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, FetchStatus } from '../../const';

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
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getOffersFetchStatus } from '../../store/offers/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const offersFetchStatus = useAppSelector(getOffersFetchStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || offersFetchStatus === FetchStatus.Pending) {
    return <FullPageSpinner size='big' />;
  }

  if (offersFetchStatus === FetchStatus.Error) {
    return <ErrorScreen />;
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
            <Route path={AppRoute.Offer} element={<Room />} />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
