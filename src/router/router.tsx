import { createBrowserRouter } from 'react-router';
import { MOVIE_LISTS, TOP_LISTS } from '@/constants/constants.ts';
import { MoviesListMain } from '@/components/pages/MoviesListMain/MoviesListMain.tsx';
import { Movies } from '@/components/pages/Movies/Movies.tsx';
import { MoviesListTop } from '@/components/pages/MoviesListTop/MoviesListTop.tsx';
import { MovieDetail } from '@/components/pages/MovieDetail/MovieDetail.tsx';
import { ActorDetail } from '@/components/pages/ActorDetail/ActorDetail.tsx';
import { Layout } from '@/components/Layout/Layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      ...TOP_LISTS.map((el) => ({
        path: el.url,
        element: <MoviesListTop />,
      })),
      ...MOVIE_LISTS.map((el) => ({
        path: el.url,
        element: <MoviesListMain />,
      })),
      {
        path: '/movie/:id',
        element: <MovieDetail />,
      },
      {
        path: '/actor/:id',
        element: <ActorDetail />,
      },
    ],
  },
]);
