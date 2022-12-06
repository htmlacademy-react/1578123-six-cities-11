import { createAction } from '@reduxjs/toolkit';
import { SortingType } from '../const';

export const changeCity = createAction<{ city: string }>('offer/changeCity');

export const changeSortingType = createAction<{ sortingType: SortingType }>('offer/changeSortingType');
