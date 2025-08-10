import { ArrowBack, Language, Movie } from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router';
import { MovieCard } from '@entities/movies/ui/MovieCard/MovieCard';
import { useGetFilmQuery, useGetSequelsAndPrequelsQuery, useGetStaffQuery } from '@entities/movies/api/kinopoiskApi.ts';
import { VideoPlayer } from '../../widgets/VideoPlayer/VideoPlayer.tsx';

export function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const idNumb = Number(id);

  const { data: film, isLoading: isFilmLoading } = useGetFilmQuery(idNumb);
  const { data: sequelsAndPrequels, isLoading: isSequelsLoading, error:  sequelsAndPrequelsError } = useGetSequelsAndPrequelsQuery(idNumb);
  const { data: staff, isLoading: isStaffLoading } = useGetStaffQuery(idNumb);

  if (isFilmLoading || isSequelsLoading || isStaffLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
        <CircularProgress size="6rem" />
      </Box>
    );
  }

  if (!film) return ;

  const directors = staff?.filter((person) => person.professionText === 'Режиссеры') || [];
  const actors = staff?.filter((person) => person.professionText === 'Актеры').slice(0, 10) || [];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 2 }}>
      <Grid container spacing={4}>
        {/* Постер */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component="img"
            src={film.posterUrl}
            alt={film.nameRu}
            width="100%"
            sx={{ borderRadius: 3 }}
          />
        </Grid>

        {/* Информация */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button  onClick={() => navigate(-1)} startIcon={<ArrowBack />} variant="outlined" >Назад</Button>
              <Typography variant="h4">{film.nameRu}</Typography>
            </Stack>

            <Grid container spacing={2}>
              <Grid size={6}>
                <Typography color="text.secondary">Год</Typography>
                <Typography>{film.year}</Typography>
              </Grid>

              <Grid size={6}>
                <Typography color="text.secondary">Страна</Typography>
                {film.countries.map(({ country }) => (
                  <Typography key={country}>{country}</Typography>
                ))}
              </Grid>

              <Grid size={6}>
                <Typography color="text.secondary">Жанры</Typography>
                {film.genres.map(({ genre }) => (
                  <Typography key={genre}>{genre}</Typography>
                ))}
              </Grid>

              <Grid size={6}>
                <Typography color="text.secondary">Режиссеры</Typography>
                {directors.map(({ nameRu }) => (
                  <Typography key={nameRu}>{nameRu}</Typography>
                ))}
              </Grid>

              <Grid size={6}>
                <Typography color="text.secondary">Длительность</Typography>
                <Typography>{film.filmLength ? `${film.filmLength} мин.` : "Длительность не указана"}</Typography>
              </Grid>

              <Grid size={12}>
                <Typography color="text.secondary">Описание</Typography>
                <Typography>{film.description || 'Описание отсутствует'}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>

        {/* Актеры */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            В главных ролях
          </Typography>
          <Stack spacing={1}>
            {actors.map(({ nameRu, staffId }) => (
              <NavLink key={staffId} to={`/actor/${staffId}`}>
                {nameRu}
              </NavLink>
            ))}
          </Stack>
        </Grid>

        {/* Кнопки на Кинопоиск и IMDB */}
        <Grid size={12} display="flex" justifyContent="center" mt={4}>
          <ButtonGroup variant="outlined" size="small">
            <Button
              target="_blank"
              href={film.webUrl as string}
              endIcon={<Language />}
            >
              Кинопоиск
            </Button>
            <Button
              target="_blank"
              href={`https://www.imdb.com/title/${film.imdbId}`}
              endIcon={<Movie />}
            >
              IMDB
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid size={12} display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={4}>
          <Typography variant="h5" align="center" gutterBottom>
            Смотреть онлайн
          </Typography>
          <VideoPlayer/>
        </Grid>

        {/* Сиквелы и приквелы */}
        {sequelsAndPrequelsError && <h2>Сиквелов пока нет</h2>  }
        {sequelsAndPrequels && sequelsAndPrequels?.length > 0 && (
          <Grid size={12} mt={6}>
            <Typography variant="h5" align="center" gutterBottom>
              Сиквелы и приквелы
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              {sequelsAndPrequels?.map((movie) => (
                <MovieCard key={movie.kinopoiskId} movie={movie} />
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
