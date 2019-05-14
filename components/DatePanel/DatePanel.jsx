import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { catchDate } from '../../store/actions';
import { DateDiv, DateContainer, DateAnchor } from './DatePanelStyles.js';

const DatePanel = props => {
  const getDate = (e, date) => {
    e.preventDefault();
    props.catchDate(date);
  };

  const changeTheFirst = e => {
    const firstDiv = document.querySelector('a > *'); //1. div z datami
    if (e.target !== firstDiv && e.target !== firstDiv.childNodes[0] && e.target !== firstDiv.childNodes[1]) {
      firstDiv.classList.add('not-focused'); // jeżeli kliknieto nie 1. div, lub elementy wewnątrz niego to nadaj mu klasę not-focused
    }
    firstDiv.addEventListener('click', () => {
      firstDiv.classList.remove('not-focused'); //usun klasę not-focused w razie kliknięcia w 1. div z datą
    });
  };
  const renderDates = () => {
    const dates = [];
    const weekDaysNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
    const today = new Date();
    let date;

    for (let i = 0; i < 7; i++) {
      date = new Date(today.getTime() + i * (24 * 60 * 60 * 1000));
      dates.push({
        day: date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`,
        month: date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`,
        weekDay: weekDaysNames[date.getDay()],
      });
    }
    return dates.map(date => (
      <DateAnchor href="#" key={`${date.day}${date.month}`} onClick={changeTheFirst}>
        <DateContainer onClick={e => getDate(e, date)}>
          <h2>
            {date.day}.{date.month}
          </h2>
          <h3>{date.weekDay}</h3>
        </DateContainer>
      </DateAnchor>
    ));
  };

  return <DateDiv>{renderDates()}</DateDiv>;
};

DatePanel.propTypes = {
  catchDate: func,
};

const mapStateToProps = state => {
  return { pickedDate: state.pickedDate };
};

export default connect(
  mapStateToProps,
  { catchDate },
)(DatePanel);
