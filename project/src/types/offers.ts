export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    location: Location;
    name: string;
};

export type HostData = {
    id: number;
    name: string;
    isPro: boolean;
    avatarUrl: string;
}

export type Offer = {
    id: number;
    title: string;
    type: string;
    description: string;
    price: number;
    rating: number;
    bedrooms: number;
    goods: string[];
    images: string[];
    host: HostData;
    maxAdults: number;
    previewImage: string;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
};
