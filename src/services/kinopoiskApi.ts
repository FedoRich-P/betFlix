import { baseApi } from '@/services/baseApi.ts';

export const kinopoiskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) => `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
  }),
});

export const { useGetFilmsTopQuery } = kinopoiskApi;
