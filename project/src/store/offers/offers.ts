import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import {
  fetchNearbyAction,
  fetchOffersAction,
  fetchPropertyAction,
  logoutAction,
  postFavoritesAction
} from '../api-actions';

const initialState: OffersData = {
  offers: [],
  property: null,
  nearby: [],
  fetchOffersStatus: FetchStatus.Idle,
  fetchPropertyStatus: FetchStatus.Idle,
  fetchNearbyStatus: FetchStatus.Idle,
};

export const offers = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.fetchOffersStatus = FetchStatus.Pending;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.fetchOffersStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.fetchOffersStatus = FetchStatus.Error;
      })
      .addCase(fetchPropertyAction.pending, (state) => {
        state.fetchPropertyStatus = FetchStatus.Pending;
      })
      .addCase(fetchPropertyAction.fulfilled, (state, action) => {
        state.property = action.payload;
        state.fetchPropertyStatus = FetchStatus.Success;
      })
      .addCase(fetchPropertyAction.rejected, (state) => {
        state.fetchPropertyStatus = FetchStatus.Error;
      })
      .addCase(fetchNearbyAction.pending, (state) => {
        state.fetchNearbyStatus = FetchStatus.Pending;
      })
      .addCase(fetchNearbyAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.fetchNearbyStatus = FetchStatus.Success;
      })
      .addCase(fetchNearbyAction.rejected, (state) => {
        state.fetchNearbyStatus = FetchStatus.Error;
      })
      .addCase(postFavoritesAction.fulfilled, (state, action) => {
        state.offers.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });

        state.nearby.forEach((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        });

        if (state.property?.id === action.payload.id) {
          state.property.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offers.forEach((offer) => {
          offer.isFavorite = false;
        });

        state.nearby.forEach((offer) => {
          offer.isFavorite = false;
        });

        if( state.property) {
          state.property.isFavorite = false;
        }
      });
  },
});
