import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useTweetStyle = makeStyles((theme: Theme) => ({
  tweetContainer: {
    borderBottom: '1px solid rgb(47,51,54)',
    color: '#fff',
    fontSize: '15px',
  },
  tweetWrapper: {
    padding: '0.75rem 1rem 0.75rem 1rem',
    display: 'flex',
  },
  leftContainerTweet: {
    width: '48px',
    marginRight: '12px',
  },
  avatarContainer: {},
  rightContainerTweet: {
    width: 'calc(100% - 60px)',
    paddingRight: '1rem',
  },
  topTweetContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  informationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '42%',
  },
  fullName: {
    fontWeight: 'bold',
  },
  userName: {
    color: 'rgb(113,118,123)',
  },
  actionContainer: {},
  dotSeparated: {
    display: 'flex',
    color: 'rgb(113,118,123)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    justifyItems: 'flex-start',
    alignContent: 'flex-start',
  },
  createdAt: {
    color: 'rgb(113,118,123)',
  },
  content: {
    fontSize: '15px',
  },
}));
