import { Avatar, Button } from '@mui/material';
import { FC, ReactElement } from 'react';
import { EmojiIcon } from './components/EmojiIcon/EmojiIcon';
import { GifIcon } from './components/GifIcon/GifIcon';
import { LocationIcon } from './components/LocationIcon/LocationIcon';
import { MediaIcon } from './components/MediaIcon/MediaIcon';
import { PollIcon } from './components/PollIcon/PollIcon';
import { ScheduleIcon } from './components/ScheduleIcon/ScheduleIcon';
import { TopTweetIcon } from './components/TopTweetIcon/TopTweetIcon';
import { useTweetBoxStyle } from './style';

export const TweetBox: FC = (): ReactElement => {
  const classes = useTweetBoxStyle();

  return (
    <div className={classes.tweetBoxContainer}>
      <div className={classes.tweetBoxTitleContainer}>
        <div className={classes.tweetBoxFirstElementContainer}>
          <h5>Home</h5>
        </div>
        <div className={classes.tweetBoxSecondElementContainer}>
          <div>
            <TopTweetIcon />
          </div>
        </div>
      </div>
      <div className={classes.tweetBoxWrapper}>
        <div className={classes.leftContainer}>
          <div className={classes.avatarContainer}>
            <Avatar sx={{ width: 48, height: 48, backgroundColor: 'green' }}>K</Avatar>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.editorContainer}>
            <div className={classes.editorWrapper}>
              <div
                role="textbox"
                contentEditable="true"
                aria-multiline="true"
                aria-placeholder="What's happening?"
                placeholder="What's happening?"
              ></div>
            </div>
            <div className={classes.borderLineBottomEditor}></div>
          </div>
          <div className={classes.toolbarContainer}>
            <div className={classes.toolBarListIcon}>
              <MediaIcon />
              <GifIcon />
              <PollIcon />
              <EmojiIcon />
              <ScheduleIcon />
              <LocationIcon />
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ borderRadius: '50px', textTransform: 'none' }}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
