import React from 'react';
import { ReservationDiv } from './ReservationStyles';
import Tickets from '../../components/Tickets';
import Screen from '../../components/Screen';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: 0,
    };
  }

  downTickets = tickets => {
    this.setState({
      tickets,
    });
  };

  render() {
    return (
      <ReservationDiv>
        <Tickets downTickets={this.downTickets} />
        <Screen passTickets={this.state.tickets} />
      </ReservationDiv>
    );
  }
}

export default Reservation;
