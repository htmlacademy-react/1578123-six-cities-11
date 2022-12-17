import { FetchStatus } from "../../const";
import { OffersData } from "../../types/state";
import { makeFakeOffer } from "../../utils/mocks";
import {
  fetchNearbyAction,
  fetchOffersAction,
  fetchPropertyAction,
} from "../api-actions";
import { offers } from "./offers";

describe("Reducer: offers", () => {
  let state: OffersData;

  beforeEach(() => {
    state = {
      offers: [],
      property: null,
      nearby: [],
      fetchOffersStatus: FetchStatus.Idle,
      fetchPropertyStatus: FetchStatus.Idle,
      fetchNearbyStatus: FetchStatus.Idle,
    };
  });

  it("without additional parameters should return initial state", () => {
    expect(offers.reducer(undefined, { type: "UNKNOWN_ACTION" })).toEqual({
      offers: [],
      property: null,
      nearby: [],
      fetchOffersStatus: FetchStatus.Idle,
      fetchPropertyStatus: FetchStatus.Idle,
      fetchNearbyStatus: FetchStatus.Idle,
    });
  });

  describe("fetchOffersAction test", () => {
    it("fetchOffersAction fulfilled test", () => {
      const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());
      expect(
        offers.reducer(state, {
          type: fetchOffersAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({
        offers: fakeOffers,
        property: null,
        nearby: [],
        fetchOffersStatus: FetchStatus.Success,
        fetchPropertyStatus: FetchStatus.Idle,
        fetchNearbyStatus: FetchStatus.Idle,
      });
    });

    it("fetchOffersAction rejected test", () => {
      expect(
        offers.reducer(state, { type: fetchOffersAction.rejected.type })
      ).toEqual({
        offers: [],
        property: null,
        nearby: [],
        fetchOffersStatus: FetchStatus.Error,
        fetchPropertyStatus: FetchStatus.Idle,
        fetchNearbyStatus: FetchStatus.Idle,
      });
    });
  });

  describe("fetchPropertyAction test", () => {
    it("fetchPropertyAction fulfilled test", () => {
      const fakeProperty = makeFakeOffer();
      expect(
        offers.reducer(state, {
          type: fetchPropertyAction.fulfilled.type,
          payload: fakeProperty,
        })
      ).toEqual({
        offers: [],
        property: fakeProperty,
        nearby: [],
        fetchOffersStatus: FetchStatus.Idle,
        fetchPropertyStatus: FetchStatus.Success,
        fetchNearbyStatus: FetchStatus.Idle,
      });
    });

    it("fetchPropertyAction rejected test", () => {
      expect(
        offers.reducer(state, { type: fetchPropertyAction.rejected.type })
      ).toEqual({
        offers: [],
        property: null,
        nearby: [],
        fetchOffersStatus: FetchStatus.Idle,
        fetchPropertyStatus: FetchStatus.Error,
        fetchNearbyStatus: FetchStatus.Idle,
      });
    });
  });

  describe("fetchNearbyAction test", () => {
    it("fetchNearbyAction fulfilled test", () => {
      const fakeOffers = Array.from({ length: 5 }, () => makeFakeOffer());
      expect(
        offers.reducer(state, {
          type: fetchNearbyAction.fulfilled.type,
          payload: fakeOffers,
        })
      ).toEqual({
        offers: [],
        property: null,
        nearby: fakeOffers,
        fetchOffersStatus: FetchStatus.Idle,
        fetchPropertyStatus: FetchStatus.Idle,
        fetchNearbyStatus: FetchStatus.Success,
      });
    });

    it("fetchNearbyAction rejected test", () => {
      expect(
        offers.reducer(state, { type: fetchNearbyAction.rejected.type })
      ).toEqual({
        offers: [],
        property: null,
        nearby: [],
        fetchOffersStatus: FetchStatus.Idle,
        fetchPropertyStatus: FetchStatus.Idle,
        fetchNearbyStatus: FetchStatus.Error,
      });
    });
  });
});
