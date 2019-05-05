import React from 'react';
import DateDiv from './DatePanelStyles.js';

const today = new Date();

const days = [today];

for (let i = 1; i < 7; i++) {
  days.push(new Date(today.getTime() + i * (24 * 60 * 60 * 1000)));
}

const OneDate = (props) => {
  let day = days[props.count].getDate();
  day = `${day}`.length === 1 ? `0${day}` : `${day}`;

  let month = days[props.count].getMonth() + 1;
  month = `${month}`.length === 1 ? `0${month}` : `${month}`;

  const weekDay = days[props.count].getDay();
  const weekDaysNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

  return (
    <a href="/">
      <div className="date-container">
        <div>
          <h2>{day}.{month}</h2>
          <h3>{weekDaysNames[weekDay]}</h3>
        </div>
      </div>
    </a>
  );
};

const DatePanel = () => {
  const dateDivs = [];
  for (let i = 0; i < 7; i++) {
    dateDivs.push(<OneDate key={i} count={i} />);
  }

  return <DateDiv>{dateDivs}</DateDiv>;
};

export default DatePanel;
