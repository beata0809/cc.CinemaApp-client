/* eslint-disable react/sort-comp */
import React from 'react';
import { ReservationDiv, AddIcon, AddButton } from './ReservationStyles';

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      normal: 0,
      reduced: 0,
      senior: 0,
      total: 0,
      price: 0,
    };
  }

  render() {
    return (
      <ReservationDiv>
        <div className="reservation-container">
          <div className="border reservation"> Rezerwacja </div>
          <div className="border tickets">
            <div className="flex">Wybierz bilety </div>
            <TicketType text="Normalny" title="normal" ticket={this.state.normal} price='20' click={this.IncreaseDecrease} />
            <TicketType text="Ulgowy" title="reduced" ticket={this.state.reduced} price='15' click={this.IncreaseDecrease} />
            <TicketType text="Senior" title="senior" ticket={this.state.senior} price='10' click={this.IncreaseDecrease} />
            <div className="flex row"><div className="summary">Ilość biletów</div> <div className="summary">{this.state.total} </div> </div>
            <div className="flex row"><div className="summary">Cena</div> <div className="summary"> {this.state.price} zł </div> </div>
            <AddButton className="flex" type="primary"> Rezerwuj </AddButton>
          </div>
          <div className="flex border screen-view"> Screen </div>
        </div>
      </ReservationDiv>
    );
  }

  IncreaseDecrease = event => {
    const name = event.currentTarget.parentElement.className.split(' ');
    const newState = {};
    if (name[0] === 'plus') {
      newState[name[1]] = parseInt(event.currentTarget.parentElement.getAttribute('value'), 10) + 1;
      this.setState(newState, function update() {
        this.setState({ total: this.state.normal + this.state.reduced + this.state.senior }, function update2() {
          this.setState({ price: this.state.normal * 20 + this.state.reduced * 15 + this.state.senior * 10 });
        });
      });
    } else {
      if (event.currentTarget.parentElement.getAttribute('value') == 0) return;
      newState[name[1]] = parseInt(event.currentTarget.parentElement.getAttribute('value'), 10) - 1;
      this.setState(newState, function update() {
        this.setState({ total: this.state.normal + this.state.reduced + this.state.senior }, function update2() {
          this.setState({ price: this.state.normal * 20 + this.state.reduced * 15 + this.state.senior * 10 });
        });
      });
    }
  };
}

const TicketType = props => {
  return (
    <div className="flex row">
      <div className="counter"> {props.text} </div>
      <div className="price counter">
        <div className={`minus ${props.title}`} value={props.ticket}>
          <AddIcon type="minus-circle" onClick={props.click} />
        </div>
        <div> {props.ticket} </div>
        <div className={`plus ${props.title}`} value={props.ticket}>
          <AddIcon type="plus-circle" onClick={props.click} />
        </div>
      </div>
      <div className="price counter"> {props.ticket * props.price} zł </div>
    </div>
  );
};
export default Reservation;
