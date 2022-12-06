import { Offer } from './types/offers';
import { SortingType } from './const';

export const getOffersByCity = (city: string, offers: Offer[]) =>
  offers.filter((offer) => offer.city.name === city);

export const sortByPriceAsc = (offerA: Offer, offerB: Offer) =>
  offerA.price - offerB.price;

export const sortByPriceDesc = (offerA: Offer, offerB: Offer) =>
  offerB.price - offerA.price;

export const sortByRating = (offerA: Offer, offerB: Offer) =>
  offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offer[], sortingType: SortingType) => {
  const sortedOffers = offers.slice();

  switch (sortingType) {
    case SortingType.Default:
      return sortedOffers;
    case SortingType.Ascending:
      return sortedOffers.sort(sortByPriceAsc);
    case SortingType.Descending:
      return sortedOffers.sort(sortByPriceDesc);
    case SortingType.TopRated:
      return sortedOffers.sort(sortByRating);
    default:
      throw new Error('Unknown sorting type!');
  }
};
