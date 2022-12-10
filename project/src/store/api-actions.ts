import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthorizationData } from '../types/authorization-data';
import { Offer } from '../types/offers';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { loadOffers, redirectToRoute, requireAuthorization, setLoginDataLoadingStatus, setOffersDataLoadingStatus, setUser } from './actions';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Hotels);
  dispatch(setOffersDataLoadingStatus(true));
  dispatch(loadOffers(data));
  dispatch(setOffersDataLoadingStatus(false));
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post<UserData>(APIRoute.Login);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  dispatch(setLoginDataLoadingStatus(true));
  const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(data.token);
  dispatch(requireAuthorization(AuthorizationStatus.Auth));
  dispatch(setUser(data));
  dispatch(redirectToRoute(AppRoute.Root));
  dispatch(setLoginDataLoadingStatus(false));
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUser(null));
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});
