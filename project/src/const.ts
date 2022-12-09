export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Favorites = '/favorites',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum UrlMarker {
  DefaultMarker = '/img/pin.svg',
  CurrentMarker = '/img/pin-active.svg'
}

export const MAX_RATING = 5;

export const RatingTitles = [
  { value: '5', title: 'perfect' },
  { value: '4', title: 'good' },
  { value: '3', title: 'not bad' },
  { value: '2', title: 'badly' },
  { value: '1', title: 'terribly' },
];

export const CITIES = ['Paris', 'Cologne', 'Bruxelles', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const START_CITY = 'Paris';

export enum SortingType {
  Default = 'Popular',
  Ascending = 'Price: low to high',
  Descending = 'Price: high to low',
  TopRated = 'Top rated first'
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Hotels = '/hotels',
  Nearby = '/nearby',
  Favorites = '/favorite'
}

export const TIMEOUT_ERROR = 2000;
