import { Grid } from '@mui/material';
import { FC, ReactElement } from 'react';
import { SideBar } from '../../components/SideBar/SideBar';
import { useHomeStyle } from './style';

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();

  return (
    <Grid container className={classes.container} justifyContent="center">
      <Grid container direction="row" style={{ backgroundColor: '#fff', width: '75%' }}>
        <Grid item xs={3} md={3}>
          <SideBar />
        </Grid>
        <Grid item xs={6} md={6}>
          <div style={{ backgroundColor: 'purple', height: '100vh' }}>Content</div>
        </Grid>
        <Grid item xs={3} md={3}>
          <div style={{ backgroundColor: 'blue', height: '100vh' }}>RightSide</div>
        </Grid>
      </Grid>
    </Grid>
  );
};
