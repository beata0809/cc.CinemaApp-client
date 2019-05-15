import React from 'react';
import { number, object } from 'prop-types';
import { connect } from 'react-redux';
import { SummaryDiv, SummaryHeader, SpannedText } from './SummaryStyles';

function Summary(props) {
  return (
    <SummaryDiv>
      <SummaryHeader>Podsumowanie</SummaryHeader>
      <p>Film: {props.singleMovie.title}</p>
      <p>
        Data: {props.pickedDate.day}.{props.pickedDate.month}
      </p>
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
  singleMovie: object,
  pickedDate: object,
};

const mapStateToProps = state => {
  console.log(state);
  return {
    singleMovie: state.singleMovie,
    pickedDate: state.pickedDate,
  };
};

export default connect(mapStateToProps)(Summary);
