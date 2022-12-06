import { createReducer } from '@reduxjs/toolkit';
import { SortingType, START_CITY } from '../const';
import { offers } from '../mocks/offers';
import { changeCity, changeSortingType } from './actions';

const initialState = {
  city: START_CITY,
  offers,
  sortingType: SortingType.Default
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
    });
});

export { reducer };
