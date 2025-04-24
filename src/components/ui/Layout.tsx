import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Navbar } from '@components/ui/Navbar/Navbar.tsx';
import { Footer } from '@components/ui/Footer/Footer.tsx';

export const Layout = () => {
  return (
    <Container fixed className={'flex flex-col min-h-lvh'}>
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};
