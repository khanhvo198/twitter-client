import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useLoginStyle = makeStyles((theme: Theme) => ({
  wrapper: {
    backgroundColor: '#242d35',
    height: '100%',
  },
  wrapperBox: {
    backgroundColor: 'white',
    width: '20rem',
    height: '40rem',
    borderRadius: '1rem',
  },
  stackHeight: {
    height: '100%',
  },
  twitterWelcome: {
    color: 'black',
  },
  buttonLogin: {
    borderRadius: '50px !important',
    width: '75%',
  },
  signupText: {
    color: 'blue',
    fontWeight: 'bold',
  },
}));
