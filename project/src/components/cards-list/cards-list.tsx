import CardItem from '../card/card-item';
import { Offer } from '../../types/offers';

import { useState } from 'react';

type CardsListProps = {
    offers: Offer[];
};

function CardsList ({ offers }: CardsListProps): JSX.Element {
    const [, setActiveOffer] = useState<number | null>(null);

    const handleOfferMouseEnter = (offerId: number | null) => {
        setActiveOffer(offerId);
    };

    return (
        <div className="cities__places-list">
            {offers.map((offer) => (
                <CardItem 
                    key={offer.id}
                    offer={offer}
                    onMouseEnter={handleOfferMouseEnter}
                />
            ))}
        </div>
    );
}

export default CardsList;