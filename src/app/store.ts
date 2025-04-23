import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  currentQueryReducer,
  currentQuerySlice,
} from '@features/currentQuerySlice/currentQuerySlice.ts';
import { kinopoiskApi } from '@/services/kinopoiskApi.ts';

export const store = configureStore({
  reducer: {
    [currentQuerySlice.name]: currentQueryReducer,
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

setupListeners(store.dispatch);
