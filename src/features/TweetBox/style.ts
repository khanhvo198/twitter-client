import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export const useTweetBoxStyle = makeStyles((theme: Theme) => ({
  tweetBoxContainer: {
    backgroundColor: '#000',
    color: 'rgb(239, 243, 244)',
    // borderLeft: '1px solid rgb(47,51,54)',
    // borderRight: '1px solid rgb(47,51,54)',
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
    height: '65%',
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
  tweetSetting: {
    display: 'flex',
    height: '20%',
    '& div': {
      color: 'rgb(29, 155, 240)',
      fontSize: '14px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
    },
  },
  borderLineBottomEditor: {
    borderBottom: '1px solid rgb(47,51,54)',
    height: '15%',
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
