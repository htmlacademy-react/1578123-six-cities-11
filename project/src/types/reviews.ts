import { HostData } from './offers';

export type Review = {
    id: number;
    rating: number;
    comment: string;
    user: HostData;
    date: string;
};

export type ReviewData = {
    comment: string;
    rating: number;
    id: number;
};
