import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainPage from '../../pages/main/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import PageNotFound from '../../pages/page_404/page-404';

import { HelmetProvider } from 'react-helmet-async';

type AppScreenProps = {
  cardsCount: number;
};

function App({cardsCount}: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <MainPage cardsCount={cardsCount} />
    </HelmetProvider>
    
  );
}

export default App;
