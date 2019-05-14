import React from 'react';
import { OneSit, LineDiv, LegendDiv, TextDiv } from './LegendStyles.js';

export const Legend = () => {
  return (
    <LegendDiv>
      <LineDiv>
        <OneSit color="darkgreen" />
        <TextDiv> Wolne </TextDiv>
      </LineDiv>
      <LineDiv>
        <OneSit color="red" />
        <TextDiv> Zarezerwowane </TextDiv>
      </LineDiv>
      <LineDiv>
        <OneSit color="yellow" />
        <TextDiv> Wybrane </TextDiv>
      </LineDiv>
    </LegendDiv>
  );
};
