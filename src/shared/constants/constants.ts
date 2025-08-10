import { TopList } from '@shared/types';

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

export const MOVIE_LISTS: TopList[] = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
    value: 'FILM',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/serials',
    value: 'TV_SERIES',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
    value: 'FILM',
  },
];

export const excludeGenres = ['', 'новости', 'для взрослых', 'церемония', 'реальное ТВ', 'ток-шоу'];
