import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';

import MainPage from '../../pages/main/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page_404/page-404';
import PrivateRoute from '../private-route/private-route';

import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  offers: Offer[];
  reviews: Review[];
};

function App({ offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <Favorites offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route path={AppRoute.Offer} element={<Room offers={offers} reviews={reviews}/>} />
          </Route>
          <Route path={AppRoute.NotFound} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
