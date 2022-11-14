import { Host } from './offers';

export type Review = {
    id: number;
    rating: number;
    comment: string;
    author: Host;
    date: string;
};