import React from 'react';
import { ReservationDiv } from './ReservationStyles';
import Tickets from '../../components/Tickets';
import Screen from '../../components/Screen';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: 0,
      takenSits: 0,
    };
  }

  downTickets = tickets => {
    this.setState({
      tickets,
    });
  };

  downTakenSits = takenSits => {
    this.setState({
      takenSits,
    });
  };

  render() {
    return (
      <ReservationDiv>
        <Tickets downTickets={this.downTickets} passTakenSits={this.state.takenSits} />
        <Screen passTickets={this.state.tickets} downTakenSits={this.downTakenSits} />
      </ReservationDiv>
    );
  }
}

export default Reservation;
