import { createSelector } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getFavorites = (state: State): Offer[] => state[NameSpace.Favorites].favorites;

export const getFavoritesFetchStatus = (state: State): FetchStatus => state[NameSpace.Favorites].fetchStatus;

export const getPostFavoriteStatus = (state: State): FetchStatus => state[NameSpace.Favorites].postStatus;

export const selectPostFavoriteStatus = createSelector(
  [getPostFavoriteStatus],
  (status) => ({
    isLoading: status === FetchStatus.Pending,
    isError: status === FetchStatus.Error,
    isSuccess: status === FetchStatus.Success
  })
);
