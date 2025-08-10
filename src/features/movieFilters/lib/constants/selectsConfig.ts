import { Country, Genre } from '@shared/types';

export const ordersList = [
  { title: 'По рейтингу', value: 'RATING' },
  { title: 'По оценкам', value: 'NUM_VOTE' },
];

export const yearsList = new Array(60).fill(null).map((_, index) => ({
  title: new Date().getFullYear() - index,
  value: new Date().getFullYear() - index,
}));

export const createSelectsConfig = (countriesList: Country[], genresList: Genre[]) => [
  {
    id: 'order',
    label: 'Сортировка',
    items: ordersList,
    valueKey: 'value',
    labelKey: 'title',
    field: 'order',
  },
  {
    id: 'countries',
    label: 'Страна',
    items: countriesList,
    valueKey: 'id',
    labelKey: 'country',
    field: 'countries',
  },
  {
    id: 'genres',
    label: 'Жанр',
    items: genresList,
    valueKey: 'id',
    labelKey: 'genre',
    field: 'genreId',
  },
  {
    id: 'year',
    label: 'Год',
    items: yearsList,
    valueKey: 'value',
    labelKey: 'title',
    field: 'year',
  },
];
