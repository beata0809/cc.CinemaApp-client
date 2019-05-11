import React from 'react';
import { OneSit } from './SitsStyles.js';

export const Sits = props => {
  const sits = [];
  for (let i = 0; i < 60; i += 1) {
    sits.push(`${i}`);
  }
  return sits.map(sit => <OneSit id={sit} key={sit} onClick={props.handleClick} />);
};
