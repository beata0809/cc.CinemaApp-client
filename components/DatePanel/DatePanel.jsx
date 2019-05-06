import React from 'react';
import DateDiv from './DatePanelStyles.js';
// to musi iśc do osobnej funkcji, albo do constructora, albo do state'u. Nie moze tak sobie tu wisiec
const today = new Date();

const days = [today]; // troche bez sensu, można odrazu pushować w pętli poniżej

for (let i = 1; i < 7; i++) {
  days.push(new Date(today.getTime() + i * (24 * 60 * 60 * 1000)));
}
console.log(days);

// Każdy komponent powinien być w osobnym folderze, albo mozesz zrobić metodę renderOneDate wewnąrz DatePanel
// zamiast używać klasy date-container, zrób poprostu nowy styled component DateContainer
const OneDate = props => {
  let day = days[props.count].getDate();
  day = `${day}`.length === 1 ? `0${day}` : `${day}`;

  let month = days[props.count].getMonth() + 1;
  month = `${month}`.length === 1 ? `0${month}` : `${month}`;

  const weekDay = days[props.count].getDay();
  const weekDaysNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

  // zamiast pustych divów powinno się używać czegoś takiego jak React Fragment => https://reactjs.org/docs/fragments.html
  // w h2 lepiej użyć template string => {`${day}.${month}`}
  return (
    <a href="/">
      <div className="date-container">
        <div>
          <h2>
            {day}.{month}
          </h2>
          <h3>{weekDaysNames[weekDay]}</h3>
        </div>
      </div>
    </a>
  );
};

const DatePanel = () => {
  // to tez powinno isc do osobnej metody
  // zamiast pętli for, powinno się użyć metody map()
  const dateDivs = [];
  for (let i = 0; i < 7; i++) {
    dateDivs.push(<OneDate key={i} count={i} />);
  }

  return <DateDiv>{dateDivs}</DateDiv>;
};

// PRZYKŁAD CZYTELNIEJSZEGO ROZWIĄZANIA

// const DatePanel = () => {
//   const renderDates = () => {
//     const dates = [];
//     const weekDaysNames = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
//     const today = new Date();

//     for (let i = 0; i < 7; i++) {
//       dates.push({
//         day: today.getDate() + i < 10 ? `0${today.getDate() + i}` : `${today.getDate() + i}`,
//         month: today.getMonth() < 10 ? `0${today.getMonth()}` : `${today.getMonth()}`,
//         weekDay: weekDaysNames[today.getDay() + i > 6 ? today.getDay() + i - 7 : today.getDay() + i],
//       });
//     }
//
//     return dates.map(date => (
//       <a href="/" key={`${date.day}${date.month}`}>
//         <div className="date-container">
//           <div>
//             <h2>
//               {date.day}.{date.month}
//             </h2>
//             <h3>{date.weekDay}</h3>
//           </div>
//         </div>
//       </a>
//     ));
//   };
//   return <DateDiv>{renderDates()}</DateDiv>;
// };

export default DatePanel;
