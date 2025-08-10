import { createSlice } from '@reduxjs/toolkit';
import { FilmsGetApi } from '@shared/types/api.ts';

type SearchQuery = FilmsGetApi & {
  keyword: string
}

const initialState: SearchQuery = {
  countries: '',
  genres: '',
  order: 'NUM_VOTE',
  type: 'ALL',
  yearFrom: 0,
  page: 1,
  keyword: '',
};

export const searchQuerySlice = createSlice({
  name: 'searchQuerySlice',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSearchQuery } = searchQuerySlice.actions;

export const SearchReducer = searchQuerySlice.reducer;