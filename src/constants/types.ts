import { iconComponents } from '@/constants/constants.ts';

export type IconName = keyof typeof iconComponents;

export type MovieList = {
  title: string;
  icon: IconName;
  url: string;
};

export type TopList = MovieList & {
  value: string;
};
