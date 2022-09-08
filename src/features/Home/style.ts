import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useHomeStyle = makeStyles((theme: Theme) => ({
  container: {
    backgroundColor: '#000',
    color: 'rgb(239, 243, 244)',
    borderLeft: '1px solid rgb(47,51,54)',
    borderRight: '1px solid rgb(47,51,54)',
  },
  tweetBoxTitleContainer: {
    minHeight: '53px',
    padding: '0 1rem 0 1rem',
    display: 'flex',
    width: '100%',
    opacity: 0.8,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    backdropFilter: 'blur(12px)',
  },
  tweetBoxFirstElementContainer: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    '& h5': {
      margin: 0,
      fontWeight: 'bold',
    },
  },
  tweetBoxSecondElementContainer: {
    width: '10%',
    color: 'rgb(239, 243, 244)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& div': {
      minWidth: '36px',
      minHeight: '36px',
      marginRight: '-9px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& div:hover': {
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: 'rgb(24,24,24)',
    },
  },
}));
