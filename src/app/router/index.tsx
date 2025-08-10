import { createBrowserRouter } from 'react-router';
import { MOVIE_LISTS, TOP_LISTS } from '@shared/constants/constants.ts';
import { MoviesPage } from '@pages/MoviesPage.tsx';
import { MainPage } from '@pages/MainPage.tsx';
import { MoviesSectionPage } from '@pages/MoviesSectionPage.tsx';
import { MoviePage } from '@pages/MoviePage.tsx';
import { ActorPage } from '@pages/ActorPage.tsx';
import { Layout } from '@app/layouts/Layout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      ...TOP_LISTS.map((el) => ({
        path: el.url,
        element: <MoviesSectionPage />,
      })),
      ...MOVIE_LISTS.map((el) => ({
        path: el.url,
        element: <MoviesPage />,
      })),
      {
        path: '/movie/:id',
        element: <MoviePage />,
      },
      {
        path: '/actor/:id',
        element: <ActorPage />,
      },
    ],
  },
]);
