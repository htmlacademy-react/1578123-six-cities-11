import { Link } from 'react-router-dom';

import { Offer } from '../../types/offers';
import CardItem from '../card/card-item';

type FavoritesListProps = {
  offers: Offer[];
};

interface ReduceType {
  [key: string]: Offer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {

  const offersByCity = offers.reduce<ReduceType>((total, current) => {
    if (!total[current.city.name]) {
      total[current.city.name] = [];
    }

    total[current.city.name].push(current);

    return total;
  }, {});

  return (
    <ul className="favorites__list">
      {Object.keys(offersByCity).map((city) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/#">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {offersByCity[city].map(
              (offer) =>
                offer.city.name === city && <CardItem offer={offer} place='favorite'/>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
