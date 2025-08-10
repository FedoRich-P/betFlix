import { IconName } from '../../../widgets/Sidebar/model/constants.ts';

export type Country = {
  country: string;
  id?: string;
};

export type Genre = {
  genre: string;
  id?: string;
};

export type FilmApi = {
  countries: Country[];
  coverUrl: string;
  description: string;
  genres: Genre[];
  imdbId: string;
  kinopoiskId: number;
  logoUrl: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingAgeLimits: string;
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
  type: 'FILM' | string;
  year: number;
  webUrl?: string;
  filmLength?: number;
};

export type ResponseApi = {
  items: FilmApi[];
  total: number;
  totalPages: number;
};

export type FilmApiMovieCard = Pick<
  FilmApi,
  'kinopoiskId' | 'posterUrlPreview' | 'nameRu' | 'nameEn' | 'ratingKinopoisk'
>;

export type FilmsGetApi = {
  countries?: string;
  genres?: string;
  order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
  type?: FilmTypeTypes
  yearFrom?: number;
  page?: number;
};

export type FilmTypeTypes = 'ALL' | 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES'| 'TOP_POPULAR_MOVIES'| 'TOP_250_MOVIES' | string

export type StaffApi = {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string | null;
  posterUrl: string;
  professionText: string;
  professionKey: string;
};

export type MovieList = {
  title: string;
  icon: IconName;
  url: string;

};

export type TopList = MovieList & {
  value: FilmTypeTypes;
};
