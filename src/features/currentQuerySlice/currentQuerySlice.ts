import { createSlice } from '@reduxjs/toolkit/react';
import { FilmsGetApi } from '@shared/types/api.ts';

const initialState: FilmsGetApi = {
  countries: '',
  genres: '',
  order: 'NUM_VOTE',
  type: 'ALL',
  yearFrom: new Date().getFullYear(),
  page: 1,
};

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState,
  reducers: {
    selectQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => ({
      ...initialState,
    }),
  },
});

export const {selectQuery, resetQuery} = currentQuerySlice.actions;

export const currentQueryReducer = currentQuerySlice.reducer;
