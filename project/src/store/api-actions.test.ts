import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import {
  checkAuthAction,
  fetchCommentsAction,
  fetchFavoritesAction,
  fetchNearbyAction,
  fetchOffersAction,
} from './api-actions';
import { makeFakeComment, makeFakeOffer } from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('Should authorization status is «auth» when server results with 200', async () => {
    const store = mockStore();

    mockAPI.onGet(APIRoute.Login).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type,
    ]);
  });

  it('Should dispatch Load_Offers when GET /offers', async () => {
    const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());

    mockAPI.onGet(APIRoute.Hotels).reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });

  it('Should dispatch Load_Comments when GET /comments', async () => {
    const fakeComments = Array.from({ length: 5 }, () => makeFakeComment());
    const fakeOffer = makeFakeOffer();

    mockAPI
      .onGet(`${APIRoute.Comments}/${fakeOffer.id}`)
      .reply(200, fakeComments);

    const store = mockStore();

    await store.dispatch(fetchCommentsAction(fakeOffer.id.toString()));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchCommentsAction.pending.type,
      fetchCommentsAction.fulfilled.type,
    ]);
  });

  it('Should dispatch Load_Favorites when GET /favorites', async () => {
    const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());

    mockAPI.onGet(APIRoute.Favorites).reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchFavoritesAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoritesAction.pending.type,
      fetchFavoritesAction.fulfilled.type,
    ]);
  });

  it('Should dispatch Load_Nearby when GET /offers nearby', async () => {
    const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());
    const fakeOffer = fakeOffers[0];

    mockAPI
      .onGet(`${APIRoute.Hotels}/${fakeOffer.id}/nearby`)
      .reply(200, fakeOffers);

    const store = mockStore();

    await store.dispatch(fetchNearbyAction(fakeOffer.id.toString()));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchNearbyAction.pending.type,
      fetchNearbyAction.fulfilled.type,
    ]);
  });
});
