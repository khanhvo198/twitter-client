import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useTweetBoxStyle = makeStyles((theme: Theme) => ({
  tweetBoxContainer: {
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
  tweetBoxWrapper: {
    height: '157px',
    borderBottom: '1px solid rgb(47,51,54)',
    padding: '0 1rem 0 1rem',
    display: 'flex',
    width: '100%',
  },
  leftContainer: {
    width: '48px',
    padding: '4px 0 4px 0',
    marginRight: '12px',
  },
  avatarContainer: {
    paddingTop: '4px',
  },
  rightContainer: {
    width: 'calc(100% - 60px)',
    paddingRight: '1rem',
  },
  editorContainer: {
    height: '65%',
    display: 'flex',
    flexDirection: 'column',
  },
  editorWrapper: {
    height: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'text',
    '& div': {
      outline: 'none',
      width: '100%',
      fontSize: '20px',
      '&[contentEditable="false"]': {
        '&:empty': {
          '&::before': {
            content: 'attr(placeholder)',
          },
        },
      },

      '&[contentEditable="true"]': {
        '&:empty': {
          '&:before': {
            content: 'attr(placeholder)',
            color: 'darkgray',
          },
        },
      },
    },
  },
  borderLineBottomEditor: {
    borderBottom: '1px solid rgb(47,51,54)',
    height: '30%',
    marginLeft: '-8px',
  },
  toolbarContainer: {
    height: '35%',
    padding: '0.5rem 0 0.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolBarListIcon: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '40%',
  },
}));
