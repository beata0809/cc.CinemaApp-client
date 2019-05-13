import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { DateDiv, DateContainer } from './DatePanelStyles.js';
import { catchDate } from '../../store/actions';

const DatePanel = props => {
  const getDate = (e, date) => {
    e.preventDefault();
    props.catchDate(date);
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
      <a href="/" key={`${date.day}${date.month}`}>
        <DateContainer onClick={e => getDate(e, date)}>
          <h2>
            {date.day}.{date.month}
          </h2>
          <h3>{date.weekDay}</h3>
        </DateContainer>
      </a>
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
