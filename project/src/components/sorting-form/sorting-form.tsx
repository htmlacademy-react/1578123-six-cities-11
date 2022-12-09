import { useRef, useState } from 'react';
import { SortingType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingType } from '../../store/actions';
import { useOnClickOutside } from 'usehooks-ts';
import classNames from 'classnames';

function SortingForm(): JSX.Element {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const dispatch = useAppDispatch();
  const currentSortingType = useAppSelector((state) => state.sortingType);

  const closeOptions = () => setOpen(false);

  const handleSortingClick = (sortingType: SortingType) => {
    dispatch(changeSortingType({ sortingType }));
    closeOptions();
  };

  const handleOptionsClick = () => setOpen(!open);

  useOnClickOutside(ref, closeOptions);

  const optionsClassName = classNames('places__options places__options--custom', {
    'places__options--opened': open
  });

  return (
    <form className="places__sorting" action="#" method="get" ref={ref}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOptionsClick}>
        {`${currentSortingType}`}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={optionsClassName}>
        {Object.values(SortingType).map((value: SortingType) => {
          const className = classNames('places__option', {
            'places__option--active': value === currentSortingType
          });

          return (
            <li
              key={value}
              className={className}
              tabIndex={0}
              onClick={() => handleSortingClick(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortingForm;
