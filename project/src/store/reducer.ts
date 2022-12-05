import { createReducer } from '@reduxjs/toolkit';
import { START_CITY } from '../const';
import { offers } from '../mocks/offers';
import { changeCity } from './actions';

const initialState = {
  city: START_CITY,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    const { city } = action.payload;
    state.city = city;
  });
});

export { reducer };
