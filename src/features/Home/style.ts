import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useHomeStyle = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#000',
    height: '100vh',
    borderLeft: '1px solid rgb(47,51,54)',
    borderRight: '1px solid rgb(47,51,54)',
  },
}));
