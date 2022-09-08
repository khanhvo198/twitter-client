import { Avatar } from '@mui/material';
import { FC, ReactElement } from 'react';
import { useTweetStyle } from './style';

export const Tweet: FC = (): ReactElement => {
  const classes = useTweetStyle();
  return (
    <div className={classes.tweetContainer}>
      <div className={classes.tweetWrapper}>
        <div className={classes.leftContainerTweet}>
          <div className={classes.avatarContainer}>
            <Avatar sx={{ width: 48, height: 48, backgroundColor: 'green' }}>K</Avatar>
          </div>
        </div>
        <div className={classes.rightContainerTweet}>
          <div className={classes.topTweetContainer}>
            <div className={classes.informationContainer}>
              <span className={classes.fullName}>Khanh Võ</span>
              <span> </span>
              <span className={classes.userName}>@khanhvo_198</span>
              <span> </span>
              <div className={classes.dotSeparated}>.</div>
              <span className={classes.createdAt}>6h</span>
            </div>
            <div className={classes.actionContainer}>...</div>
          </div>
          <div className={classes.content}>This is my first tweet</div>
        </div>
      </div>
    </div>
  );
};
