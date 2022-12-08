import { createReducer } from '@reduxjs/toolkit';
import { SortingType, START_CITY } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { changeCity, changeSortingType, loadComments, loadOffers, setError, setOffersDataLoadingStatus } from './actions';

type InitialState = {
  city: string;
  offers: Offer[];
  comments: Review[];
  sortingType: SortingType;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: InitialState = {
  city: START_CITY,
  offers: [],
  comments: [],
  sortingType: SortingType.Default,
  error: null,
  isOffersDataLoading: false
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
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
