import { createAction } from '@reduxjs/toolkit';
import { SortingType } from '../const';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

export const changeCity = createAction<{ city: string }>('offer/changeCity');

export const changeSortingType = createAction<{ sortingType: SortingType }>('offer/changeSortingType');

export const setError = createAction<string | null>('offer/setError');

export const loadOffers = createAction<Offer[]>('offer/loadOffers');

export const loadComments = createAction<Review[]>('data/loadComments');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
