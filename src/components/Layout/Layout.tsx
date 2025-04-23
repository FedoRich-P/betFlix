import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router';
import { Navbar } from '@/components/ui/Navbar/Navbar.tsx';
import { Footer } from '@/components/ui/Footer/Footer.tsx';

export const Layout = () => {
  return (
    <Container
      fixed
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};
