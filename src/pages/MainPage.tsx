import { useGetFilmsQuery } from '@entities/movies/api/kinopoiskApi.ts';
// @ts-ignore
import BearCarousel, { BearSlideCard } from 'bear-react-carousel';
import { NavLink } from 'react-router';
import { ReactNode } from 'react';
import { FilmApi } from '@shared/types';

export function MainPage() {
  const { data: films } = useGetFilmsQuery({type: 'FILM'});
  const { data: miniSerials } = useGetFilmsQuery({type: 'MINI_SERIES'});
  const { data: shows } = useGetFilmsQuery({type: 'TV_SHOW'});
  const { data: serials } = useGetFilmsQuery({type: 'TV_SERIES', genres: '1'});
  const { data: cartools } = useGetFilmsQuery({type: 'FILM', genres: '18'});

  const serializeDataForCarousel = (
    items: Pick<FilmApi, 'kinopoiskId' | 'posterUrl' | 'nameRu'>[]
  ) =>
    items?.map((item) => (
      <NavLink
        key={item.kinopoiskId}
        to={`/movie/${item.kinopoiskId}`}
        className={'inline-block overflow-hidden rounded-lg h-full ml-4'}>
        <img
          src={item.posterUrl}
          alt={item.nameRu}
          className={'block w-full h-full object-cover'}
        />
      </NavLink>
    )) ?? [];

  if (!shows || !miniSerials || !films || !serials || !cartools) return;

  type CarouselType = {
    title: string;
    url: string;
    data: ReactNode[];
  }

  const carouselArr: CarouselType[] = [
    { title: 'Фильмы', url: '/films', data: serializeDataForCarousel(films?.items) },
    { title: 'Мультфильмы', url: '/cartoons', data: serializeDataForCarousel(cartools?.items) },
    { title: 'Сериалы', url: '/serials', data: serializeDataForCarousel(serials?.items) },
    { title: 'Мини сериалы', url: '/mini-serials', data: serializeDataForCarousel(miniSerials?.items) },
    { title: 'Популярные шоу', url: '/popular', data: serializeDataForCarousel(shows?.items) },
  ];

  return (
    <ul className="p-4">
      {carouselArr.map((item, index) => (
        <li
          key={index}
          className="w-full h-full p-5 mb-6 border-b-3 border-t-2 border-blue-500 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <div className="mb-4 flex items-center justify-between">
            <NavLink to={item.url} className="text-blue-700 font-bold text-lg hover:underline">
              Смотреть все →
            </NavLink>
            <h2 className="text-2xl font-bold">{item.title}</h2>
          </div>
          <BearCarousel
            data={item.data}
            slidesPerView={5}
            height="300px"
            isEnableNavButton
            isEnablePagination
            isInfiniteLoop
          />
        </li>
      ))}
    </ul>
  );
}

//===================================================================

// export function Movies({}: Props) {
//   const [page, setPage] = useState(1);
//   const [movies, setMovies] = useState<FilmApi[]>([]);
//   const [hasMore, setHasMore] = useState(true);
//
//   const isLoadingNextPage = useRef(false);
//   const { ref, inView } = useInView({ threshold: 0.5 });
//
//   const { data, isFetching } = useGetFilmsQuery({ page });
//
//   const getMovies = useCallback(
//     (data: FilmApi[]) => {
//       const items = data ?? [];
//
//       setMovies((prev) => [...prev, ...items]);
//
//       if (items.length === 0 || page >= 7) {
//         setHasMore(false);
//       }
//
//       isLoadingNextPage.current = false;
//     },
//     [page]
//   );
//
//   useEffect(() => {
//     if (data?.items.length) {
//       getMovies(data.items);
//     }
//   }, [data]);
//
//   useEffect(() => {
//     if (inView && hasMore && !isLoadingNextPage.current && !isFetching) {
//       isLoadingNextPage.current = true;
//       setPage((prev) => prev + 1);
//     }
//   }, [inView]);
//
//   return (
//     <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
//       {movies.map((movie) => (
//         <MovieCard key={movie.kinopoiskId} movie={movie} />
//       ))}
//       {hasMore ? (
//         <div ref={ref}>Загружаем...</div>
//       ) : (
//         <div className="text-center col-span-full text-gray-500">Больше фильмов нет</div>
//       )}
//     </div>
//   );
// }

//===================================================================

// import { useGetFilmsQuery } from '@services/kinopoiskApi.ts';
// import { FilmApi } from '@services/api.ts';
// import { MovieCard } from '@components/ui/MovieCard/MovieCard.tsx';
// import { useEffect, useRef, useState } from 'react';
//
// type Props = {};
//
// export function Movies({}: Props) {
//   let [page, setPage] = useState<number>(1);
//   const [movies, setMovies] = useState<FilmApi[]>([]);
//   const [hasMore, setHasMore] = useState(true);
//
//   const isLoadingNextPage = useRef(false);
//
//   console.log('global', page);
//
//   const { data, isFetching } = useGetFilmsQuery(
//     { page },
//     {
//       skip: !page,
//       refetchOnMountOrArgChange: true,
//     }
//   );
//
//   useEffect(() => {
//     if (data) {
//       const items = data.items || [];
//
//       if (items.length > 0) {
//         setMovies((prev) => [...prev, ...items]);
//       }
//
//       if (page >= 7 || items.length === 0) {
//         setHasMore(false);
//       }
//
//       isLoadingNextPage.current = false;
//     }
//   }, [data]);
//
//   useEffect(() => {
//     function scrollHandler() {
//       const scrollTop = document.documentElement.scrollTop;
//       const scrollHeight = document.documentElement.scrollHeight;
//       const clientHeight = window.innerHeight;
//
//       if (
//         scrollHeight - (scrollTop + clientHeight) < 100 &&
//         !isFetching &&
//         hasMore &&
//         !isLoadingNextPage.current
//       ) {
//         isLoadingNextPage.current = true;
//         setPage((prev) => prev + 1);
//       }
//     }
//
//     document.addEventListener('scroll', scrollHandler);
//     return () => {
//       document.removeEventListener('scroll', scrollHandler);
//     };
//   }, [isFetching, hasMore]);
//
//   return (
//     <div className={'grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]'}>
//       {movies.map((movie: FilmApi) => (
//         <MovieCard key={movie.kinopoiskId} movie={movie} />
//       ))}
//       {hasMore ? (
//         <div>Еще...</div>
//       ) : (
//         <div className="text-center col-span-full text-gray-500">Больше фильмов нет</div>
//       )}
//     </div>
//   );
// }
