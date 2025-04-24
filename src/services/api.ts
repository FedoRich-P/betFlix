type Country = {
  country: string;
};

type Genre = {
  genre: string;
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
};

export type Response = {
  items: FilmApi[];
  total: number;
  totalPages: number;
};

export type FilmApiMovieCard = Pick<
  FilmApi,
  'kinopoiskId' | 'posterUrlPreview' | 'nameRu' | 'nameEn' | 'ratingKinopoisk'
>;
