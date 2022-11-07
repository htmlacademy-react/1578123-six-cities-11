import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";

import MainPage from "../../pages/main/main-page";
import Favorites from "../../pages/favorites/favorites";
import Login from "../../pages/login/login";
import Room from "../../pages/room/room";
import PageNotFound from "../../pages/page_404/page-404";

import PrivateRoute from "../private-route/private-route";

import { HelmetProvider } from "react-helmet-async";

type AppScreenProps = {
  cardsCount: number;
};

function App({ cardsCount }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage cardsCount={cardsCount} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Room />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
