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
  twitterIcon: {
    '& div': {
      padding: 0,
      width: '48px',
      height: '48px',
      minWidth: 0,
      minHeight: 0,
      '&:hover': {
        backgroundColor: 'rgb(24,24,24)',
        borderRadius: 30,
        [theme.breakpoints.down('md')]: {
          borderRadius: '50%',
        },
      },
    },
  },
  itemWrapper: {
    '& div': {
      padding: '0.2rem 0.5rem 0.2rem 0',
      [theme.breakpoints.down('lg')]: {
        padding: 0,
        width: '50px',
        height: '50px',
        minWidth: 0,
        minHeight: 0,
      },
      '&:hover': {
        backgroundColor: 'rgb(24,24,24)',
        borderRadius: 30,
        [theme.breakpoints.down('md')]: {
          borderRadius: '50%',
        },
      },
    },
  },
}));
