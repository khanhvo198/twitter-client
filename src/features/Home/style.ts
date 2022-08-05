import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useHomeStyle = makeStyles((theme: Theme) => ({
  container: { backgroundColor: '#000', height: '100vh' },
}));

export const useSideBarStyle = makeStyles((theme: Theme) => ({
  item: {
    width: '1rem',
    height: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
}));
