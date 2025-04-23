import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';
import { MovieList, TopList } from '@/constants/types.ts';

export type IconName = keyof typeof iconComponents;

export const iconComponents = {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
};

export const TOP_LISTS: TopList[] = [
  {
    title: 'Топ 100',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'Топ 250',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comic',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейные',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-series',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS: MovieList[] = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/serials',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
