import { Review } from '../types/reviews';

export const reviews: Review[] = [
  {
    id: 1,
    rating: 3,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    author: {
      id: 1,
      name: 'Mary Werner',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    date: 'Fri Oct 07 2022 12:17:41 GMT+0200 (Центральная Европа, летнее время)',
  },

  {
    id: 2,
    rating: 2,
    comment: 'It could be better. It was dirty and too small for me',
    author: {
      id: 2,
      name: 'Alex Smith',
      isPro: true,
      avatarUrl: 'img/avatar-max.jpg',
    },
    date: 'Tue Jul 05 2022 17:20:31 GMT+0200 (Центральная Европа, летнее время)',
  },
];

