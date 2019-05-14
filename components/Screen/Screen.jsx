import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchSits } from '../../store/actions';
import { Sits } from '../Sits/Sits.jsx';
import { Rows } from '../Rows/Rows.jsx';
import { Legend } from '../Legend/Legend.jsx';
import { ScreenDiv, SitsDiv, ScreenInHall, LeftRows, LegendDiv } from './ScreenStyles';

class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      choosed: 0,
      sitsList: [],
      takenSits: [],
    };
  }

  componentDidMount() {
    this.renderTakenSits();
  }

  chooseSit = event => {
    // sprawdza czy miejsce nie jest wcześniej zaznaczone
    if (this.state.takenSits.indexOf(parseInt(event.target.id, 10)) !== -1) {
      window.alert('To miejsce jest już zarezerwowane.');
      return;
    }
    // odznaczanie miejsca zaznaczonego wczesniej
    if (this.state.sitsList.indexOf(parseInt(event.target.id, 10)) !== -1) {
      const array = [...this.state.sitsList];
      const index = this.state.sitsList.indexOf(parseInt(event.target.id, 10));
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
    // sprawdza czy wybrano bilety
    if (this.props.passTickets <= this.state.choosed) {
      window.alert('Wybierz bilet');
      return;
    }
    // zaznaczenie miejsca
    this.setState(
      prevState => ({
        choosed: prevState.choosed + 1,
      }),
      this.setState(
        {
          sitsList: [...this.state.sitsList, parseInt(event.target.id, 10)],
        },
        this.changeStatus(event),
      ),
    );
  };

  changeStatus = event => {
    console.log(this.state.sitsList);
    event.target.style.backgroundColor = 'yellow';
  };

  renderTakenSits = async () => {
    console.log(2);
    //przykładowy film
    await this.props.fetchSits('aaaa', '123');
    const takenSits = this.props.sits[0].seats;
    this.setState({
      takenSits,
    });
    for (let i = 0; i < takenSits.length; i += 1) {
      console.log(takenSits[i]);
      document.getElementById(takenSits[i]).style.backgroundColor = 'red';
    }
    this.props.downTakenSits(takenSits.length);
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
        <LegendDiv>
          <Legend />
        </LegendDiv>
      </ScreenDiv>
    );
  }
}

Screen.propTypes = {
  passTickets: PropTypes.number,
  fetchSits: PropTypes.func,
  downTakenSits: PropTypes.func,
  sits: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    sits: state.sits,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSits,
  },
)(Screen);
