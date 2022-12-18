import { FetchStatus } from '../../const';
import { FavoritesData } from '../../types/state';
import { makeFakeOffer } from '../../utils/mocks';
import {
  fetchFavoritesAction,
  logoutAction,
  postFavoritesAction,
} from '../api-actions';
import { favorites } from './favorites';

describe('Reducer: favorites', () => {
  let state: FavoritesData;

  beforeEach(() => {
    state = {
      favorites: [],
      fetchStatus: FetchStatus.Idle,
      postStatus: FetchStatus.Idle,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(favorites.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      favorites: [],
      fetchStatus: FetchStatus.Idle,
      postStatus: FetchStatus.Idle,
    });
  });

  describe('fetchFavoritesAction test', () => {
    it('fetchFavorites fulfilled', () => {
      const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());

      expect(
        favorites.reducer(state, {
          type: fetchFavoritesAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({
        favorites: fakeOffers,
        fetchStatus: FetchStatus.Success,
        postStatus: FetchStatus.Idle,
      });
    });

    it('fetchFavorites rejected', () => {
      expect(
        favorites.reducer(state, {
          type: fetchFavoritesAction.rejected.type,
        })
      ).toEqual({
        favorites: [],
        fetchStatus: FetchStatus.Error,
        postStatus: FetchStatus.Idle,
      });
    });
  });

  describe('postFavoritesAction test', () => {
    it('postFavorites fulfilled', () => {
      let fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());
      const fakeNewOffer = makeFakeOffer();

      if (fakeNewOffer.isFavorite) {
        fakeOffers = [...fakeOffers, fakeNewOffer];
      } else {
        fakeOffers.filter((offer) => offer.id !== fakeNewOffer.id);
      }

      expect(
        favorites.reducer(state, { type: postFavoritesAction.fulfilled.type, payload: fakeOffers })
      ).toEqual({
        favorites: [],
        fetchStatus: FetchStatus.Idle,
        postStatus: FetchStatus.Success,
      });
    });
  });

  describe('logoutAction test', () => {
    it('logoutAction fulfilled', () => {
      expect(
        favorites.reducer(state, { type: logoutAction.fulfilled.type })
      ).toEqual({
        favorites: [],
        fetchStatus: FetchStatus.Idle,
        postStatus: FetchStatus.Idle,
      });
    });
  });
});
