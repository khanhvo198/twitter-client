import { Avatar } from '@mui/material';
import { FC, ReactElement } from 'react';
import { LikeIcon } from './components/LikeIcon/LikeIcon';
import { ReplyIcon } from './components/ReplyIcon/ReplyIcon';
import { RetweetIcon } from './components/RetweetIcon/RetweetIcon';
import { ShareIcon } from './components/ShareIcon/ShareIcon';
import { useTweetStyle } from './style';

export interface TweetProps {
  text: String;
}

export const Tweet: FC<TweetProps> = (text): ReactElement => {
  const classes = useTweetStyle();
  return (
    <div className={classes.tweetContainer}>
      <div className={classes.tweetWrapperContent}>
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
          <div className={classes.content}>{text.text}</div>
          <div className={classes.tweetWrapperActions}>
            <div className={classes.replyIcon}>
              <ReplyIcon />
              <span>1231.1K</span>
            </div>
            <div className={classes.retweetIcon}>
              <RetweetIcon />
              <span>123.1K</span>
            </div>
            <div className={classes.likeIcon}>
              <LikeIcon />
              <span>123.1K</span>
            </div>
            <div className={classes.shareIcon}>
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
