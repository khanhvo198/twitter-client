import React, { FC, ReactElement } from 'react';
import { useHomeStyle } from './style';

export const Home: FC = (): ReactElement => {
  const classes = useHomeStyle();

  return (
    <React.Fragment>
      <div style={{ backgroundColor: 'purple', height: '100vh' }}>Home</div>
    </React.Fragment>
  );
};
