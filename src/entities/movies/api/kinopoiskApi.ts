import { baseApi } from '@shared/api/baseApi.ts';
import { excludeGenres } from '@shared/constants/constants.ts';
import { FilmApi, FilmsGetApi, ResponseApi } from '@shared/types';

export const kinopoiskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilmsTop: builder.query<ResponseApi, { type: string | undefined; page: number }>({
      query: ({ type, page }) => `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilms: builder.query<ResponseApi, FilmsGetApi>({
      query: ({
        countries = '',
        genres = '',
        order = 'NUM_VOTE',
        type = 'ALL',
        yearFrom = 0,
        page = 1,
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genres}&order=${order}&type=${type}&yearFrom=${yearFrom}&yearTo=${yearFrom}&page=${page}`,
    }),
    getGenresAndCountries: builder.query<FilmApi, void>({
      query: () => '/v2.2/films/filters',
      transformResponse: (response : FilmApi ) => ({
        ...response,
        genres: response.genres.filter(
          ({ genre }) => !excludeGenres.includes(genre),
        ),
      }),
    }),
    getFilm: builder.query<FilmApi, number>({
      query: id => `/v2.2/films/${id}`,
    }),
    getSequelsAndPrequels: builder.query<FilmApi[], number>({
      query: id => `/v2.1/films/${id}/sequels_and_prequels`,
      transformResponse: (response: any[]) =>
        response.map(el => ({ ...el, kinopoiskId: el.filmId})),
    }),

    getStaff: builder.query<any[],  number>({
      query: id => `/v1/staff?filmId=${id}`,
    }),

    getStaffById: builder.query<any,  number>({
      query: id => `/v1/staff/${id}`,
    }),
  }),
});

export const { useGetFilmsTopQuery, useGetFilmsQuery, useGetGenresAndCountriesQuery, useGetStaffQuery, useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffByIdQuery  } = kinopoiskApi;
