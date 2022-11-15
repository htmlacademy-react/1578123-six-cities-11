export enum AppRoute {
    Root = '/',
    Login = '/login',
    Offer = '/offer/:id',
    Favorites = '/favorites',
    NotFound = '*'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export const MAX_RATING = 5;

export const RatingTitles = [
    {value: '5', title: 'perfect'},
    {value: '4', title: 'good'},
    {value: '3', title: 'not bad'},
    {value: '2', title: 'badly'},
    {value: '1', title: 'terribly'}
  ];
