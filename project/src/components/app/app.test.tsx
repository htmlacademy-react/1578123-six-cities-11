import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AppRoute, AuthorizationStatus, FetchStatus, SortingType, START_CITY } from '../../const';
import { makeFakeComment, makeFakeNotification, makeFakeOffer, makeFakeOfferFavorite } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import App from './app';

const mockStore = configureMockStore();

const fakeOffersFavorite = Array.from({ length: 2 }, () => makeFakeOfferFavorite());
const fakeComments = Array.from({ length: 5 }, () => makeFakeComment());
const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer()).concat(fakeOffersFavorite);
const fakeNotifications = Array.from({ length: 5 }, () => makeFakeNotification());

const store = mockStore({
  OFFER: { offers: fakeOffers, nearby: fakeOffers.slice(3), fetchOffersStatus: FetchStatus.Idle, fetchNearbyStatus: FetchStatus.Success },
  UI: { city: START_CITY, sortingType: SortingType.Default },
  USER: { authorizationStatus: AuthorizationStatus.Auth, fetchStatus: FetchStatus.Success },
  COMMENTS: { comments: fakeComments, fetchStatus: FetchStatus.Success },
  FAVORITES: { favorites: fakeOffersFavorite, fetchStatus: FetchStatus.Success },
  NOTIFICATIONS: { notifications: fakeNotifications },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application routing', () => {
  it('should render "WelcomeScreen" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.Login);

    render(fakeApp);

    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);

    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it(`should render "Property" when user navigate to ${AppRoute.Offer}/${fakeOffersFavorite[0].id}`, () => {
    history.push(`${AppRoute.Offer}/${fakeOffersFavorite[0].id}`);

    render(fakeApp);

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push(AppRoute.NotFound);

    render(fakeApp);

    expect(screen.getByText('404 - Page not found')).toBeInTheDocument();
    expect(screen.getByText('To Main page')).toBeInTheDocument();
  });
});
