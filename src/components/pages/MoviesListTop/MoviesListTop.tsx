import { useGetFilmsTopQuery } from '@services/kinopoiskApi.ts';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { TOP_LISTS } from '@constants/constants.ts';
import { MoviesList } from '@/components/ui/MoviesList/MoviesList';
import { Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

export function MoviesListTop() {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const movieType = TOP_LISTS.find((el) => el.url === location.pathname);

  const {
    data: movies,
    isLoading,
    isFetching,
    error,
  } = useGetFilmsTopQuery({ type: movieType?.value, page });

  useEffect(() => {
    setPage(1);
  }, [location]);

  if (isLoading || isFetching) return <h2>Loading</h2>;
  if (error) return <h2>Some Error</h2>;

  return (
    <>
      <div className={'flex items-center justify-between p-2.5'}>
        <Button
          startIcon={<ArrowBack />}
          variant={'outlined'}
          size={'large'}
          onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Typography variant={'h2'} fontSize={'2.5rem'} color={'textSecondary'} fontWeight={'bold'}>
          {movieType?.title}
        </Typography>
      </div>
      {movies && (
        <MoviesList
          movies={movies.items}
          page={page}
          setPage={setPage}
          totalPages={movies.totalPages}
        />
      )}
    </>
  );
}
