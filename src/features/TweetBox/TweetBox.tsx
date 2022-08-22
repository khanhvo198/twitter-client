import { FC, ReactElement } from 'react';
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
    </div>
  );
};
