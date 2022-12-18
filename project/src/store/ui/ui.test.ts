import { SortingType, START_CITY } from '../../const';
import { changeCity, changeSortingType, ui } from './ui';

describe('Reducer: ui', () => {
  it('Should return initial state without additional parameters', () => {
    expect(ui.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual({
      city: START_CITY,
      sortingType: SortingType.Default,
    });
  });

  describe('changeCity test', () => {
    const currentCityName = 'Paris';
    const newCityName = 'Amsterdam';
    expect(
      ui.reducer(
        { city: currentCityName, sortingType: SortingType.Default },
        changeCity({ city: newCityName })
      )
    ).toEqual({ city: newCityName, sortingType: SortingType.Default });
  });

  describe('changeSortingType test', () => {
    const currentCityName = 'Paris';
    const currentSortingType = SortingType.Default;
    const newSortingType = SortingType.TopRated;
    expect(
      ui.reducer(
        { city: currentCityName, sortingType: currentSortingType },
        changeSortingType({ sortingType: newSortingType })
      )
    ).toEqual({ city: currentCityName, sortingType: newSortingType });
  });
});
