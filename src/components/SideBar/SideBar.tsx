import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, List, ListItem, ListItemIcon } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExploreIcon } from './components/ExploreIcon/ExploreIcon';
import { HomeIcon } from './components/HomeIcon/HomeIcon';
import { MessageIcon } from './components/MessageIcon/MessageIcon';
import { MoreIcon } from './components/MoreIcon/MoreIcon';
import { NotificationIcon } from './components/NotificationIcon/NotificationIcon';
import { ProfileIcon } from './components/ProfileIcon/ProfileIcon';
import { SideBarText } from './components/SideBarText/SideBarText';

export const SideBar = () => {
  let activeStyle = {
    textDecoration: 'underline',
  };
  let inActiveStyle = {
    textDecoration: 'strike-through',
  };
  return (
    <React.Fragment>
      <List style={{ backgroundColor: '#000', height: '100vh' }}>
        <ListItem
          style={{ padding: '0.3rem 0 0.5rem 0' }}
          sx={{
            justifyContent: {
              xs: 'center',
              sm: 'center',
              md: 'center',
              lg: 'flex-start',
              xl: 'flex-start',
            },
          }}
        >
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <TwitterIcon style={{ color: 'white', fontSize: '2.1rem' }} />
          </ListItemIcon>
        </ListItem>
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <HomeIcon isActive={isActive} />
              </ListItemIcon>
              <SideBarText text="Home" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/explore" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <ExploreIcon isActive={isActive} />
              </ListItemIcon>
              <SideBarText text="Explore" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/notifications" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <NotificationIcon isActive={isActive} />
              </ListItemIcon>
              <SideBarText text="Notifications" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/messages" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <MessageIcon isActive={isActive} />
              </ListItemIcon>
              <SideBarText text="Messages" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/profile" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <ProfileIcon isActive={isActive} />
              </ListItemIcon>
              <SideBarText text="Profile" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>
        <NavLink to="/more" style={{ textDecoration: 'none' }}>
          {({ isActive }) => (
            <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
              <ListItemIcon style={{ justifyContent: 'center' }}>
                <MoreIcon />
              </ListItemIcon>
              <SideBarText text="More" isActive={isActive} />
            </ListItem>
          )}
        </NavLink>

        <ListItem style={{ padding: '1rem 0 1rem 0', justifyContent: 'center' }}>
          <ListItemIcon style={{ width: '90%', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: { lg: '50px', xl: '50px' },
                width: { lg: '100%', xl: '100%' },
                minHeight: '52px',
                textTransform: 'none',
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
                fontWeight: 'bold',
                fontSize: 17,
              }}
            >
              Tweet
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: { xs: '50%', sm: '50%', md: '50%', lg: '50px', xl: '50px' },
                width: { xs: '50px', sm: '50px', md: '50px', lg: '100%', xl: '100%' },
                height: { xs: '50px', sm: '50px', md: '50px' },
                textTransform: 'none',
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
                minWidth: 0,
                minHeight: 0,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ color: 'white', fill: 'white', width: '24px', height: '24px' }}
              >
                <g>
                  <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                </g>
              </svg>
            </Button>
          </ListItemIcon>
        </ListItem>
      </List>
    </React.Fragment>
  );
};
