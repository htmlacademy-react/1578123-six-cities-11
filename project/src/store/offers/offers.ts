import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import {
  fetchNearbyAction,
  fetchOffersAction,
  fetchPropertyAction,
} from '../api-actions';

type Offers = {
  offers: Offer[];
  property: Offer | null;
  nearby: Offer[];
  fetchOffersStatus: FetchStatus;
  fetchPropertyStatus: FetchStatus;
  fetchNearbyStatus: FetchStatus;
};

const initialState: Offers = {
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
      });
  },
});
