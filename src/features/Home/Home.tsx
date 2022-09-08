import React, { FC, ReactElement } from 'react';
import { Tweet } from '../Tweet/Tweet';
import { TweetBox } from '../TweetBox/TweetBox';
import { TopTweetIcon } from './components/TopTweetIcon/TopTweetIcon';
import { useHomeStyle } from './style';

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();

  return (
    <React.Fragment>
      <div className={classes.container}>
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
        <TweetBox />
        <Tweet />
        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />

        <Tweet />
      </div>
    </React.Fragment>
  );
};
