import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { useSideBarStyle } from '../../features/Home/style';

export const SideBar = () => {
  const classes = useSideBarStyle();
  return (
    <React.Fragment>
      <List style={{ backgroundColor: '#000', height: '100vh' }}>
        <ListItem style={{ padding: '0.3rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <TwitterIcon style={{ color: 'white', fontSize: '2.1rem' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            {/* <InboxIcon style={{ color: 'white', fontSize: '2.1rem' }} /> */}
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="Home"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <path d="M20.585 9.468c.66 0 1.2-.538 1.2-1.2 0-.662-.54-1.2-1.2-1.2h-3.22l.31-3.547c.027-.318-.07-.63-.277-.875-.206-.245-.495-.396-.822-.425-.65-.035-1.235.432-1.293 1.093l-.326 3.754H9.9l.308-3.545c.06-.658-.43-1.242-1.097-1.302-.665-.05-1.235.43-1.293 1.092l-.325 3.754h-3.33c-.663 0-1.2.538-1.2 1.2 0 .662.538 1.2 1.2 1.2h3.122l-.44 5.064H3.416c-.662 0-1.2.54-1.2 1.2s.538 1.202 1.2 1.202h3.22l-.31 3.548c-.057.657.432 1.24 1.09 1.3l.106.005c.626 0 1.14-.472 1.195-1.098l.327-3.753H14.1l-.308 3.544c-.06.658.43 1.242 1.09 1.302l.106.005c.617 0 1.142-.482 1.195-1.098l.325-3.753h3.33c.66 0 1.2-.54 1.2-1.2s-.54-1.202-1.2-1.202h-3.122l.44-5.064h3.43zm-5.838 0l-.44 5.063H9.253l.44-5.062h5.055z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="Explore"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="Notifications"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <path d="M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z"></path>
                <path d="M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="Messages"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <path d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="Profile"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ justifyContent: 'center' }}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'white', fill: 'white', fontSize: '15px', width: '1.75rem' }}
            >
              <g>
                <circle cx="17" cy="12" r="1.5"></circle>
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="7" cy="12" r="1.5"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' },
            }}
            primary="More"
            style={{ color: 'white' }}
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
        </ListItem>
        <ListItem style={{ padding: '1rem 1rem' }}>
          <ListItemIcon style={{ width: '90%' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                borderRadius: { xs: '50%', sm: '50%', md: '50%', lg: '50px', xl: '50px' },
                width: { xs: '50px', sm: '50px', md: '50px', lg: '100%', xl: '100%' },
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
