import { Offer } from './types/offers';

export const getOffersByCity = (city: string, offers: Offer[]) => offers.filter((offer) => offer.city.name === city);
