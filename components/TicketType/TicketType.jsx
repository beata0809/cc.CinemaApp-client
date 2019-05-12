import React from 'react';
import { PropTypes } from 'prop-types';
import { AddIcon, TicketRow, Row, RowEnd } from './TicketTypeStyles';

const TicketType = props => {
  return (
    <TicketRow>
      <Row> {props.text} </Row>
      <RowEnd>
        <div className={`minus ${props.title}`} value={props.ticket}>
          <AddIcon type="minus-circle" onClick={props.handleClick} />
        </div>
        <div> {props.ticket} </div>
        <div className={`plus ${props.title}`} value={props.ticket}>
          <AddIcon type="plus-circle" onClick={props.handleClick} />
        </div>
      </RowEnd>
      <RowEnd> {props.ticket * props.price} zł </RowEnd>
    </TicketRow>
  );
};

TicketType.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  ticket: PropTypes.number,
  price: PropTypes.number,
  handleClick: PropTypes.func,
};

export default TicketType;
