import React, { FC, ReactElement } from 'react';
import { TweetBox } from '../TweetBox/TweetBox';
import { useHomeStyle } from './style';

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <TweetBox />
      </div>
    </React.Fragment>
  );
};
