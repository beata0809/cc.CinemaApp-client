import React from 'react';
import { number } from 'prop-types';
import { SummaryDiv, SummaryHeader, SpannedText } from './SummaryStyles';

function Summary(props) {
  return (
    <SummaryDiv>
      <SummaryHeader>Podsumowanie</SummaryHeader>
      <p>Film: </p>
      <p>Data: </p>
      <p>Godzina: </p>
      <p>Miejsca: </p>
      <p>
        Bilety normalne:
        <SpannedText> {props.normal}</SpannedText>
      </p>
      <p>
        Bilety ulgowe:
        <SpannedText> {props.reduced}</SpannedText>
      </p>
      <p>
        Bilety seniorskie:
        <SpannedText> {props.senior}</SpannedText>
      </p>
      <p>
        Cena:
        <SpannedText> {props.price} zł</SpannedText>
      </p>
    </SummaryDiv>
  );
}

Summary.propTypes = {
  normal: number,
  reduced: number,
  senior: number,
  price: number,
};

export default Summary;
