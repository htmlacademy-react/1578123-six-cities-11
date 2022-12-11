import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthorizationData } from '../types/authorization-data';
import { Offer } from '../types/offers';
import { Review, ReviewData } from '../types/reviews';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './actions';
import { pushNotification } from './notifications/notifications';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api, rejectWithValue }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Hotels);

    return data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchCommentsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchComments', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'warning', message: 'Sorry, can\'t download reviews list!' }));

    throw err;
  }

});

export const fetchPropertyAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchProperty', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);

    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.status === StatusCodes.NOT_FOUND) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }
    }

    dispatch(pushNotification({ type: 'error', message: 'Sorry, can\'t download property!' }));

    throw err;
  }

});

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchFavorites', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(APIRoute.Favorites);

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'error', message: 'Sorry, can\'t download favorites list!' }));

    throw err;
  }

});

export const fetchNearbyAction = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/fetchNearby', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}/nearby`);

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'warning', message: 'Sorry, can\'t find nearby offers!' }));

    throw err;
  }

});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/checkAuth', async (_arg, { extra: api }) => {
  await api.get(APIRoute.Login);
});

export const loginAction = createAsyncThunk<UserData, AuthorizationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'error', message: 'Failed on login! Please, try again!' }));

    throw err;
  }
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
  } catch {
    dispatch(pushNotification({ type: 'error', message: 'Can\'t complete logout! Please, try again!' }));
  }
});

export const postCommentAction = createAsyncThunk<Review[], [string, ReviewData], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('ui/postComment', async ([id, { comment, rating }], { dispatch, extra: api }) => {
  try {
    const { data } = await api.post<Review[]>(`${APIRoute.Comments}${id}`, { comment, rating });

    return data;
  } catch (err) {
    dispatch(pushNotification({ type: 'error', message: 'Can\'t post review! Please, try again!' }));

    throw err;
  }
});
