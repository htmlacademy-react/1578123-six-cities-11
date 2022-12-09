import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortingType, START_CITY } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';
import { changeCity, changeSortingType, loadComments, loadFavorites, loadOffers, requireAuthorization, setLoginDataLoadingStatus, setOffersDataLoadingStatus, setUser } from './actions';

type InitialState = {
  city: string;
  offers: Offer[];
  comments: Review[];
  sortingType: SortingType;
  isOffersDataLoading: boolean;
  isLoginDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  favorites: Offer[];
}

const initialState: InitialState = {
  city: START_CITY,
  offers: [],
  comments: [],
  sortingType: SortingType.Default,
  isOffersDataLoading: false,
  isLoginDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favorites: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
    })
    .addCase(changeSortingType, (state, action) => {
      const { sortingType } = action.payload;
      state.sortingType = sortingType;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setLoginDataLoadingStatus, (state, action) => {
      state.isLoginDataLoading = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };
