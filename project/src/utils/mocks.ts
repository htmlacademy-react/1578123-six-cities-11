import { datatype, internet, lorem, name } from 'faker';
import { getRandomCity } from '../offer';
import { Notification } from '../types/notification';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';
import { UserData } from '../types/user-data';

export const makeFakeUser = (): UserData =>
  ({
    id: datatype.number(),
    name: name.title(),
    token: datatype.string(),
    email: internet.email(),
    avatarUrl: internet.avatar(),
    isPro: datatype.boolean(),
  } as UserData);

export const makeFakeOffer = (): Offer =>
  ({
    id: datatype.number(),
    title: lorem.words(10),
    type: 'apartment',
    description: lorem.words(10),
    price: datatype.number(),
    rating: datatype.float({ min: 1, max: 5, precision: 0.1 }),
    bedrooms: datatype.number(),
    goods: ['Heating'],
    images: [internet.avatar()],
    host: {
      avatarUrl: internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: name.title(),
    },
    maxAdults: datatype.number(),
    previewImage: internet.avatar(),
    city: {
      location: {
        latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
        longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
        zoom: 10,
      },
      name: getRandomCity(),
    },
    location: {
      latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
      longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
      zoom: 8,
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
  } as Offer);

export const makeFakeComment = (): Review =>
  ({
    id: datatype.number(),
    rating: datatype.number({ min: 1, max: 5 }),
    comment: lorem.words(55),
    user: {
      avatarUrl: internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: name.title(),
    },
    date: datatype.datetime().toString(),
  } as Review);

export const makeFakeOfferFavorite = (): Offer =>
  ({
    id: datatype.number(),
    title: lorem.words(10),
    type: 'apartment',
    description: lorem.words(10),
    price: datatype.number(),
    rating: datatype.float({ min: 1, max: 5, precision: 0.1 }),
    bedrooms: datatype.number(),
    goods: ['Heating'],
    images: [internet.avatar()],
    host: {
      avatarUrl: internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: name.title(),
    },
    maxAdults: datatype.number(),
    previewImage: internet.avatar(),
    city: {
      location: {
        latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
        longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
        zoom: 10,
      },
      name: 'Paris',
    },
    location: {
      latitude: datatype.float({ min: 50, max: 60, precision: 0.001 }),
      longitude: datatype.float({ min: 4, max: 10, precision: 0.001 }),
      zoom: 8,
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
  } as Offer);

export const makeFakeNotification = (): Notification =>
  ({
    id: String(datatype.number()),
    type: 'info',
    message: lorem.words(10),
    duration: datatype.number({ min: 3000, max: 4000 }),
  } as Notification);
