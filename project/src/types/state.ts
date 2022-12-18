import { AuthorizationStatus, FetchStatus, SortingType } from '../const';
import { store } from '../store';
import { Notification } from './notification';
import { Offer } from './offers';
import { Review } from './reviews';
import { UserData } from './user-data';

export type Comments = {
  comments: Review[];
  fetchStatus: FetchStatus;
  postStatus: FetchStatus;
};

export type FavoritesData = {
  favorites: Offer[];
  fetchStatus: FetchStatus;
  postStatus: FetchStatus;
};

export type NotificationData = {
  notifications: Notification[];
};

export type UIData = {
  city: string;
  sortingType: SortingType;
};

export type UserProcessData = {
  authorizationStatus: AuthorizationStatus;
  user: null | UserData;
  fetchStatus: FetchStatus;
};

export type OffersData = {
  offers: Offer[];
  property: Offer | null;
  nearby: Offer[];
  fetchOffersStatus: FetchStatus;
  fetchPropertyStatus: FetchStatus;
  fetchNearbyStatus: FetchStatus;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
