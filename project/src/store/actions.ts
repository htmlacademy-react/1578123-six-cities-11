import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, SortingType } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';

export const changeCity = createAction<{ city: string }>('offer/changeCity');

export const changeSortingType = createAction<{ sortingType: SortingType }>('offer/changeSortingType');

export const loadOffers = createAction<Offer[]>('offer/loadOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const loadFavorites = createAction<Offer[]>('data/loadFavorites');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setLoginDataLoadingStatus = createAction<boolean>('user/setLoginDataLoadingStatus');

export const setUser = createAction<UserData | null>('user/setUser');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offer/redirectToRoute');
