import React from 'react';
import { Modal } from 'antd';
import { PropTypes } from 'prop-types';
import { TicketDiv, AddButton, Header, Summary } from './TicketStyles';
import TicketType from '../TicketType';
import FormModal from '../FormModal';

class Tickets extends React.Component {
  constructor() {
    super();
    this.state = {
      normal: 0,
      reduced: 0,
      senior: 0,
      total: 0,
      price: 0,
      visible: false,
    };
  }

  IncreaseDecrease = event => {
    if (this.state.total === 60 - this.props.passTakenSits) {
      window.alert('Brak wolnych miejsc.')
      return;
    }
    const name = event.currentTarget.parentElement.className.split(' ');
    const newState = {};
    if (name[0] === 'plus') {
      newState[name[1]] = parseInt(event.currentTarget.parentElement.getAttribute('value'), 10) + 1;
      this.setState(newState, () => {
        this.setState(
          prevState => ({ total: prevState.normal + prevState.reduced + prevState.senior }),
          () => {
            this.setState(
              prevState => ({
                price: prevState.normal * 20 + prevState.reduced * 15 + prevState.senior * 10,
              }),
              this.props.downTickets(this.state.total),
            );
          },
        );
      });
    } else {
      if (event.currentTarget.parentElement.getAttribute('value') === '0') return;
      newState[name[1]] = parseInt(event.currentTarget.parentElement.getAttribute('value'), 10) - 1;
      this.setState(newState, () => {
        this.setState(
          prevState => ({ total: prevState.normal + prevState.reduced + prevState.senior }),
          () => {
            this.setState(
              prevState => ({
                price: prevState.normal * 20 + prevState.reduced * 15 + prevState.senior * 10,
              }),
              this.props.downTickets(this.state.total),
            );
          },
        );
      });
    }
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <TicketDiv>
        <Header>Wybierz bilety </Header>
        <TicketType
          text="Normalny"
          title="normal"
          ticket={this.state.normal}
          price="20"
          handleClick={this.IncreaseDecrease}
        />
        <TicketType
          text="Ulgowy"
          title="reduced"
          ticket={this.state.reduced}
          price="15"
          handleClick={this.IncreaseDecrease}
        />
        <TicketType
          text="Senior"
          title="senior"
          ticket={this.state.senior}
          price="10"
          handleClick={this.IncreaseDecrease}
        />
        <Summary>
          <div>Ilość biletów</div> <div>{this.state.total} </div>
        </Summary>
        <Summary>
          <div>Cena</div> <div> {this.state.price} zł </div>
        </Summary>
        <AddButton className="flex" type="primary" onClick={this.showModal}>
          Rezerwuj
        </AddButton>
        <Modal
          title="Formularz rezerwacji"
          centered
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <FormModal
            normal={this.state.normal}
            reduced={this.state.reduced}
            senior={this.state.senior}
            price={this.state.price}
          />
        </Modal>
      </TicketDiv>
    );
  }
}

Tickets.propTypes = {
  downTickets: PropTypes.func,
  passTakenSits: PropTypes.number,
};

export default Tickets;
