import { Host } from './offers';

export type Review = {
    id: number;
    rating: number;
    comment: string;
    user: Host;
    date: string;
};

export type ReviewData = {
    comment: string;
    rating: number;
};
