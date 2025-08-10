import { Rating, Stack, Tooltip } from '@mui/material';

import style from './MovieCard.module.scss';
import { NavLink } from 'react-router';
import { memo } from 'react';
import { FilmApiMovieCard } from '@shared/types';

type Props = {
  movie: FilmApiMovieCard;
};

export const MovieCard = memo(({ movie }: Props) => {
  const { kinopoiskId, ratingKinopoisk, posterUrlPreview, nameEn, nameRu } = movie;

  return (
    <article className="border-2 border-[dodgerblue] rounded-md overflow-hidden text-center">
      <NavLink
        className={'flex flex-col justify-between w-full h-full'}
        to={`/movie/${kinopoiskId}`}>
        <img className={style.img} src={posterUrlPreview} alt={nameRu} />
        <Stack className={'p-2.5 items-center'}>
          <h3 className={'text-lg font-bold text-gray-600'}>{nameRu ? nameRu : nameEn}</h3>
          {ratingKinopoisk ? (
            <Tooltip title={`${ratingKinopoisk} / 10`}>
              <Rating
                name={'read-only'}
                readOnly
                value={(ratingKinopoisk || 2) / 2}
                precision={0.2}
              />
            </Tooltip>
          ) : <h3>Рейтинг пока пуст</h3>}
        </Stack>
      </NavLink>
    </article>
  );
});
