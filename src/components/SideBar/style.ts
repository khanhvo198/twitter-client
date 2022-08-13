import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useSideBarStyle = makeStyles((theme: Theme) => ({
  item: {
    padding: '1rem 0 1rem 0',
    justifyContent: 'center',
  },
  itemIcon: {
    justifyContent: 'center',
  },
}));
