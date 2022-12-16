import { MAX_RATING } from './const';

export const getAccomodationType = (type: string): string => type.charAt(0).toUpperCase() + type.slice(1);

export const getRatingPercentage = (rating: number): number => (Math.round(rating) * 100) / MAX_RATING;
