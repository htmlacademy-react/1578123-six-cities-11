import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortingType, START_CITY } from '../../const';

type UI = {
  city: string;
  sortingType: SortingType;
};

const initialState: UI = {
  city: START_CITY,
  sortingType: SortingType.Default,
};

export const ui = createSlice({
  name: NameSpace.Ui,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{ city: string }>) => {
      const { city } = action.payload;
      state.city = city;
    },
    changeSortingType: (state, action: PayloadAction<{ sortingType: SortingType }>) => {
      const { sortingType } = action.payload;
      state.sortingType = sortingType;
    },
  },
});

export const { changeCity, changeSortingType } = ui.actions;
