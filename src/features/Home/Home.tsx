import { Grid } from '@mui/material';
import { FC, ReactElement } from 'react';
import { SideBar } from '../../components/SideBar/SideBar';
import { useHomeStyle } from './style';

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();

  return (
    <Grid container className={classes.container} justifyContent="center">
      <Grid
        item
        container
        direction="row"
        style={{ backgroundColor: '#000' }}
        xs={12}
        sm={12}
        md={11.5}
        lg={11}
        xl={9}
      >
        <Grid item xs={1.75} sm={2} md={1} lg={2} xl={2.5}>
          <SideBar />
        </Grid>
        <Grid item xs={10.25} sm={8.5} md={7} lg={6} xl={6}>
          <div style={{ backgroundColor: 'purple', height: '100vh' }}>Content</div>
        </Grid>
        <Grid
          item
          xs
          sm={1.5}
          md={4}
          lg={4}
          xl={3.5}
          sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}
        >
          <div style={{ backgroundColor: 'blue', height: '100vh' }}>RightSide</div>
        </Grid>
      </Grid>
    </Grid>
  );
};
