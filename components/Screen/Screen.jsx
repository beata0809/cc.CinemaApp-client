import React from 'react';
import { PropTypes } from 'prop-types';
import { Sits } from '../Sits/Sits.jsx';
import { Rows } from '../Rows/Rows.jsx';
import { ScreenDiv, SitsDiv, ScreenInHall, LeftRows } from './ScreenStyles';

class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      choosed: 0,
      sitsList: [],
    };
  }

  chooseSit = event => {
    if (this.state.sitsList.indexOf(event.target.id) !== -1) { //odznaczanie miejsca zaznaczonego wczesniej
      const array = [...this.state.sitsList];
      const index = this.state.sitsList.indexOf(event.target.id);
      array.splice(index, 1);
      this.setState(
        prevState => ({
          choosed: prevState.choosed - 1,
        }),
        this.setState(
          {
            sitsList: array,
          },
          this.changeStatus(event),
        ),
        console.log(this.state.sitsList),
      );
      return (event.target.style.backgroundColor = 'darkgreen');
    }
    if (this.props.passTickets <= this.state.choosed) { //sprawdza czy wybrano bilety
      console.log('Wybierz bilecik');
      window.alert('Wybierz bilecik');
      return;
    }

    this.setState(   //zaznaczenie miejsca
      prevState => ({
        choosed: prevState.choosed + 1,
      }),
      this.setState(
        {
          sitsList: [...this.state.sitsList, event.target.id],
        },
        this.changeStatus(event),
      ),
    );
  };

  changeStatus = event => {
    console.log(this.state.sitsList);
    event.target.style.backgroundColor = 'red';
  };

  render() {
    return (
      <ScreenDiv>
        <ScreenInHall>
          <p>Ekran</p>
        </ScreenInHall>
        <LeftRows>
          <Rows />
        </LeftRows>
        <SitsDiv>
          <Sits handleClick={this.chooseSit} />
        </SitsDiv>
      </ScreenDiv>
    );
  }
}

Screen.propTypes = {
  passTickets: PropTypes.number,
};

export default Screen;
