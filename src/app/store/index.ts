import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  currentQueryReducer,
  currentQuerySlice,
} from '@features/currentQuerySlice/currentQuerySlice.ts';
import { kinopoiskApi } from '@entities/movies/api/kinopoiskApi.ts';
import { searchQuerySlice, SearchReducer } from '@features/currentQuerySlice/searchQuerySlice.ts';

export const store = configureStore({
  reducer: {
    [currentQuerySlice.name]: currentQueryReducer,
    [searchQuerySlice.name]: SearchReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
