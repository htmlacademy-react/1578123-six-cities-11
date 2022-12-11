import { NameSpace, SortingType } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.Ui].city;

export const getSortingType = (state: State): SortingType => state[NameSpace.Ui].sortingType;
