import CardItem from '../card/card-item';
import { Offer } from '../../types/offers';

type CardsListProps = {
  offers: Offer[];
  place: 'city' | 'near';
  onOfferMouseEnter?: (offerId: number | null) => void;
};

const classes = {
  city: 'cities__places-list',
  near: 'near-places__list'
};

function CardsList({ offers, place, onOfferMouseEnter }: CardsListProps): JSX.Element {
  const className = classes[place];

  return (
    <div className={className}>
      {offers.map((offer) => (
        <CardItem
          key={offer.id}
          offer={offer}
          onOfferMouseEnter={onOfferMouseEnter}
          place={place}
        />
      ))}
    </div>
  );
}

export default CardsList;
