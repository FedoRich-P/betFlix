import { MOVIE_LISTS } from '@shared/constants/constants.ts';
import { ArrowBack } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { MoviesList } from '@entities/movies/ui/MoviesList/MoviesList.tsx';
import { useGetFilmsQuery, useGetGenresAndCountriesQuery } from '@entities/movies/api/kinopoiskApi.ts';
import { MoviesFilters } from '@features/movieFilters/ui/MoviesFilters/MoviesFilters.tsx';
import { useAppSelector } from '@app/store/hooks.ts';

export function MoviesPage() {
  const location = useLocation();
  const { countries, order, yearFrom, genres } = useAppSelector((state) => state.currentQuerySlice);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const movieType = MOVIE_LISTS.find((el) => el.url === location.pathname);
  const myGenreId = movieType?.url === '/cartoons' ? '18' : genres;

  const { data: responseFilms } = useGetFilmsQuery({
    type: movieType!.value,
    countries,
    order,
    yearFrom,
    genres: myGenreId,
    page,
  });

  const { data: genresAndCountries } = useGetGenresAndCountriesQuery();

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (!responseFilms || !genresAndCountries) return;

  return (
    <>
      <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} />
        <Typography variant="h4">{movieType?.title}</Typography>
      </Stack>
      <MoviesFilters
        countriesList={genresAndCountries.countries}
        genresList={genresAndCountries.genres}
        countries={countries}
        order={order}
        yearFrom={yearFrom}
        genres={genres}
      />
      <MoviesList
        movies={responseFilms?.items}
        totalPages={responseFilms?.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
