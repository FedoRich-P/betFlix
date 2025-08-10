import {
  Box,
  Button,
  FormControl,
  InputLabel, MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { resetQuery, selectQuery } from '@features/currentQuerySlice/currentQuerySlice.ts';
import { useAppDispatch } from '@app/store/hooks.ts';
import { ordersList, yearsList } from '@features/movieFilters/lib/constants/selectsConfig.ts';
import { Country, FilmsGetApi, Genre } from '@shared/types';

type Props = {
  countriesList: Country[];
  genresList: Genre[];
} & Omit<FilmsGetApi, 'type' | 'page'>;

export function MoviesFilters(props: Props) {
  const { countriesList, genresList, countries, order, yearFrom, genres } = props;

  const dispatch = useAppDispatch();

  const handleSelectChange = (field: string) => (e: SelectChangeEvent) => {
    dispatch(selectQuery({ [field]: e.target.value }));
  };

  return (
    <Stack mt={2} mb={2} sx={{ flexDirection: { sm: 'column', md: 'row' }, gap: 1 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Сортировка</InputLabel>
        <Select value={order} onChange={handleSelectChange('order')}>
          {ordersList?.map((order) => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Страна</InputLabel>
        <Select
          value={countries}
          onChange={handleSelectChange('countries')}>
          {countriesList.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Жанр</InputLabel>
        <Select value={genres} onChange={handleSelectChange('genres')}>
          {genresList.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel>Год</InputLabel>
        <Select value={yearFrom?.toString()} onChange={handleSelectChange('yearFrom')}>
          {yearsList.map((year) => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button onClick={() => dispatch(resetQuery())} variant="outlined" startIcon={<CloseIcon />}>
          сбросить
        </Button>
      </Box>
    </Stack>
  );
}


