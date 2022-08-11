import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useSideBarStyle } from '../../features/Home/style';

export const SideBar = () => {
  const classes = useSideBarStyle();
  return (
    <React.Fragment>
      <Grid container direction="column" style={{ backgroundColor: 'yellow', height: '100vh' }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Home"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' } }}
                primary="Explore"
                style={{ color: 'white' }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </React.Fragment>
  );
};
