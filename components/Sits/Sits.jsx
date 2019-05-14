import React from 'react';
import { OneSit } from './SitsStyles.js';

export const Sits = props => {
  const sits = [];
  for (let i = 0; i < 60; i += 1) {
    sits.push(`${i}`);
  }
  return sits.map(sit => (
    <OneSit
      id={parseInt(sit, 10) + 1}
      forwardedRef={parseInt(sit, 10) + 1}
      key={parseInt(sit, 10) + 1}
      onClick={props.handleClick}
    >
      {parseInt(sit, 10) + 1}
    </OneSit>
  ));
};
