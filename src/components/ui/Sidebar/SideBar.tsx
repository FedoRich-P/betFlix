import { iconComponents, IconName, MOVIE_LISTS, TOP_LISTS } from '@/constants/constants';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router';

type Props = {
  isOpen: boolean;
  handleDrawerToggle: () => void;
};

export function SideBar({ isOpen, handleDrawerToggle }: Props) {
  const Icon = ({ iconName }: { iconName: IconName }) => {
    const IconComponent = iconComponents[iconName];
    return <IconComponent />;
  };

  const handleSidebarToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDrawerToggle();
  };

  return (
    <Drawer open={isOpen} onClose={handleDrawerToggle}>
      <Box sx={{ width: 350 }} onClick={handleDrawerToggle}>
        <IconButton className={'ml-auto text-inherit'} onClick={handleSidebarToggle}>
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
  );
}
