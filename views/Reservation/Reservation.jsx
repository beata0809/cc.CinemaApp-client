import React from 'react';
import { ReservationDiv } from './ReservationStyles';
import Tickets from '../../components/Tickets';
import Screen from '../../components/Screen';

const Reservation = () => {
  return (
    <ReservationDiv>
      <Tickets />
      <Screen />
    </ReservationDiv>
  );
};

export default Reservation;
