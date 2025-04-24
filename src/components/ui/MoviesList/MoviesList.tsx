import { Pagination } from '@mui/material';
import { MovieCard } from '../MovieCard/MovieCard.tsx';
import { FilmApi } from '@services/api.ts';

type Props = {
  movies: FilmApi[];
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
};

export const MoviesList = ({ movies, totalPages, page, setPage }: Props) => {
  return (
    <>
      <div className={'grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]'}>
        {movies?.map((movie: FilmApi) => <MovieCard key={movie.kinopoiskId} movie={movie} />)}
      </div>
      <Pagination
        className="py-4 w-fit mx-auto"
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
