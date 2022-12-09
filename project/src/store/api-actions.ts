import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { store } from '.';
import { APIRoute, TIMEOUT_ERROR } from '../const';
import { Offer } from '../types/offers';
import { AppDispatch, State } from '../types/state';
import { loadOffers, setError, setOffersDataLoadingStatus } from './actions';

export const clearErrorAction = createAsyncThunk('offer/clearError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_ERROR);
});

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(loadOffers(data));
});
