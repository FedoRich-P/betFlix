import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router';
import s from './Navbar.module.scss';
import { iconComponents, MOVIE_LISTS, TOP_LISTS } from '@/constants/constants';
import { IconName } from '@/constants/types.ts';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const Icon = ({ iconName }: { iconName: IconName }) => {
    const IconComponent = iconComponents[iconName];
    return <IconComponent />;
  };

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
            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <IconButton
                  style={{ marginLeft: 'auto' }}
                  color="inherit"
                  onClick={() => {
                    setOpen(true);
                  }}>
                  <CloseIcon />
                </IconButton>
                <Divider />
                <List>
                  {TOP_LISTS.map((item) => (
                    <NavLink key={item.title} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>{<Icon iconName={item.icon} />}</ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map((item) => (
                    <NavLink key={item.title} to={item.url}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemIcon>{<Icon iconName={item.icon} />}</ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    </NavLink>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>
            <Typography
              className={s.typography}
              variant={'h5'}
              sx={{ fontWeight: 'bold' }}
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
