import { Pagination, Stack } from '@mui/material';
import { MovieCard } from '../MovieCard/MovieCard.tsx';

type Props = {
  movies: any;
  totalPages: any;
  page: any;
  setPage: any;
};

export const MoviesList = ({ movies, totalPages, page, setPage }: Props) => {
  return (
    <>
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(215px, 1fr))`,
          gap: '16px',
        }}>
        {movies?.map((movie: any) => <MovieCard movie={movie} key={movie.id} />)}
      </Stack>
      <Pagination
        sx={{
          padding: '16px 0',
          width: 'fit-content',
          margin: '0 auto',
        }}
        count={totalPages}
        color={'primary'}
        variant={'outlined'}
        shape={'rounded'}
        size={'large'}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    </>
  );
};
