import { MAX_RATING } from './const';

export const getAccomodationType = (type: string) => type.charAt(0).toUpperCase() + type.slice(1);

export const getRatingPercentage = (rating: number) => (Math.round(rating) * 100) / MAX_RATING;
