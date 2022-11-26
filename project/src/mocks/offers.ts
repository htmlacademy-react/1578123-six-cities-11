import { Offer } from '../types/offers';

export const offers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.<br>An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful',
    price: 120,
    rating: 4.8,
    bedrooms: 3,
    goods: ['Wi-Fi', 'Coffee machine', 'Cabel TV', 'Fridge'],
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
    host: {
      id: 3,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    maxAdults: 4,
    previewImg: 'img/apartment-small-03.jpg',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
  },

  {
    id: 2,
    title: 'Picturesque room near the forest',
    type: 'private room',
    description: 'Wonderful place close to riverside and forest',
    price: 70,
    rating: 5.0,
    bedrooms: 2,
    goods: ['Heating', 'Wi-Fi', 'Towels', 'Parking', 'Cofee machine'],
    images: ['img/room.jpg'],
    host: {
      id: 1,
      name: 'Max',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
    maxAdults: 2,
    previewImg: 'img/apartment-small-04.jpg',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    isFavorite: false,
    isPremium: true,
  },

  {
    id: 3,
    title: 'Studio for everyone who enjoy comfort and style',
    type: 'studio',
    description: 'A light and cozy apartment in romantic Paris',
    price: 60,
    rating: 5.0,
    bedrooms: 1,
    goods: ['Heating', 'Washing machine', 'Towels', 'Fridge'],
    images: ['img/studio-01.jpg', 'img/studio-photos.jpg'],
    host: {
      id: 4,
      name: 'Sandra',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    maxAdults: 2,
    previewImg: 'img/apartment-small-04.jpg',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 9,
    },
    isFavorite: true,
    isPremium: true,
  },

  {
    id: 6,
    title: 'Apartment for entire family',
    type: 'apartment',
    description: 'Great place for family near the park',
    price: 110,
    rating: 3.6,
    bedrooms: 2,
    goods: [
      'Kitchen',
      'Fridge',
      'Heating',
      'Towels',
      'Baby coat',
      'Washing machine',
    ],
    images: ['img/apartment-03.jpg'],
    host: {
      id: 7,
      name: 'Daniel',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
    },
    maxAdults: 5,
    previewImg: 'img/apartment-small-03.jpg',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam'
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 5,
    },
    isFavorite: false,
    isPremium: true,
  },
];
