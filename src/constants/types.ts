import { IconName } from '@/constants/constants.ts';

export type MovieList = {
  title: string;
  icon: IconName;
  url: string;
};

export type TopList = MovieList & {
  value: string;
};
