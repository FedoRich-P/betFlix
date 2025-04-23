import { Stack, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Stack
      component={'footer'}
      sx={{
        paddingBottom: 4,
        paddingTop: 4,
        alignItems: 'center',
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        marginTop: 'auto',
        borderColor: 'primary',
        borderTop: '2px solid #1976d2',
      }}>
      <Typography variant={'body2'} color={'textSecondary'}>
        &copy; {new Date().getFullYear()} &laquo;betFlix&raquo; 16+
      </Typography>
      <Typography color={'primary'} fontWeight={'bold'} variant={'h5'}>
        betFlix
      </Typography>
    </Stack>
  );
};
