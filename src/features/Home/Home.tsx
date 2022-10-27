import React, { FC, ReactElement, useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { Tweet } from '../Tweet/Tweet';
import { TweetBox } from '../TweetBox/TweetBox';
import { TopTweetIcon } from './components/TopTweetIcon/TopTweetIcon';
import { useHomeStyle } from './style';

export interface Tweet {
  text: String;
}

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();
  const [tweetList, setTweetList] = useState<Tweet[]>([]);
  useEffect(() => {
    const fetchAllTweet = async () => {
      const tweetList = await axiosClient.get('/tweets');
      setTweetList(tweetList.data.tweets);
      console.log(tweetList.data.tweets);
    };
    fetchAllTweet();
  }, []);

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
        {tweetList && tweetList.map((tweet) => <Tweet text={tweet.text} />)}
      </div>
    </React.Fragment>
  );
};
