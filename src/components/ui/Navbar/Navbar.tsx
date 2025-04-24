import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { SideBar } from '@components/ui/Sidebar/SideBar.tsx';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth={'lg'}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <SideBar isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
            <Typography
              className={'font-bold text-white no-underline'}
              variant={'h5'}
              component={NavLink}
              to={'/'}>
              betFlix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};
