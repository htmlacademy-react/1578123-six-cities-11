import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { FavoritesData } from '../../types/state';
import { fetchFavoritesAction, logoutAction, postFavoritesAction } from '../api-actions';

const initialState: FavoritesData = {
  favorites: [],
  fetchStatus: FetchStatus.Idle,
  postStatus: FetchStatus.Idle
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.fetchStatus = FetchStatus.Pending;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.fetchStatus = FetchStatus.Error;
      })
      .addCase(postFavoritesAction.pending, (state) => {
        state.postStatus = FetchStatus.Pending;
      })
      .addCase(postFavoritesAction.fulfilled, (state, action) => {
        state.postStatus = FetchStatus.Success;

        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter(({id}) => id !== action.payload.id);
        }
      })
      .addCase(postFavoritesAction.rejected, (state) => {
        state.postStatus = FetchStatus.Error;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favorites = [];
      });
  },
});
