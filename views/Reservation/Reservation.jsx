import React from 'react';
import { ReservationDiv } from './ReservationStyles';
import Tickets from './Tickets.jsx';
import Screen from './Screen.jsx';

const Reservation = () => {
  return (
    <ReservationDiv>
      <Tickets />
      <Screen />
    </ReservationDiv>
  );
};

export default Reservation;
