import { Rating, Stack, Tooltip, Typography } from '@mui/material';

import s from './MovieCard.module.scss';
import { Link } from 'react-router';

type Props = {
  movie: any;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Stack
      justifyContent={'space-between'}
      border={'2px solid dodgerblue'}
      borderRadius={'6px'}
      overflow={'hidden'}>
      <Link to={`/movie/${movie.kinopoiskId}`}>
        <img className={s.img} src={movie.posterUrlPreview} alt={movie.nameRu} />
      </Link>
      <Stack padding={'5px 10px'} alignItems={'center'}>
        <Typography>{movie.nameRu ? movie.nameRu : movie.nameEn}</Typography>
        <Tooltip title={`${movie.ratingKinopoisk} / 10`}>
          <Rating name={'read-only'} readOnly value={movie.ratingKinopoisk / 2} precision={0.2} />
        </Tooltip>
      </Stack>
    </Stack>
  );
};
