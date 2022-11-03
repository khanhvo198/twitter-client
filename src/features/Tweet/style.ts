import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useTweetStyle = makeStyles((theme: Theme) => ({
  tweetContainer: {
    borderBottom: '1px solid rgb(47,51,54)',
    color: '#fff',
    fontSize: '15px',
  },
  tweetWrapperContent: {
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
  tweetWrapperActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '425px',
    marginTop: '0.8rem',
    color: 'rgb(113, 118, 123)',
    fontSize: '15px',
    '& div:hover': {
      cursor: 'pointer',
    },
    '& div span': {
      fontSize: '13px',
      minWidth: 'calc(1em + 24px)',
      paddingRight: '12px',
    },
  },
  replyIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-0.75em',
    '& div': {
      width: '2.5em',
      height: '2.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      color: 'rgb(29,155,240)',
      '& div': {
        backgroundColor: 'rgba(29,155,240,0.1)',
        borderRadius: '50%',
      },
    },
  },

  retweetIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-0.75em',
    '& div': {
      width: '2.5em',
      height: '2.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      color: 'rgb(0,186,124)',
      '& div': {
        backgroundColor: 'rgba(0,186,124,0.1)',
        borderRadius: '50%',
      },
    },
  },

  likeIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-0.75em',
    '& div': {
      width: '2.5em',
      height: '2.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      color: 'rgb(249,24,128)',
      '& div': {
        backgroundColor: 'rgba(249,24,128,0.1)',
        borderRadius: '50%',
      },
    },
  },
  // rgb(29,155,240)
  shareIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '-0.75em',
    '& div': {
      width: '2.5em',
      height: '2.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      color: 'rgb(29,155,240)',
      '& div': {
        backgroundColor: 'rgba(29,155,240,0.1)',
        borderRadius: '50%',
      },
    },
  },
}));
