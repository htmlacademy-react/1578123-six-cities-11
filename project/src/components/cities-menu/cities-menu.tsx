import { CITIES } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/actions';
import classNames from 'classnames';
import { SyntheticEvent } from 'react';

type CitiesMenuProps = {
  currentCity: string;
};

function CitiesMenu({ currentCity }: CitiesMenuProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleCityClick = (city: string) => dispatch(changeCity({ city }));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            const className = classNames('locations__item-link tabs__item', {
              'tabs__item--active': city === currentCity,
            });

            return (
              <li key={city} className="locations__item">
                <a
                  href='/#'
                  className={className}
                  onClick={(evt: SyntheticEvent) => {
                    evt.preventDefault();
                    handleCityClick(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CitiesMenu;
