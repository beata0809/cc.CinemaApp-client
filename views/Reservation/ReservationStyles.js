import styled from 'styled-components';
import { Icon, Button } from 'antd';

export const ReservationDiv = styled.div`
  .reservation-container {
    font-size: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .reservation {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .tickets {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: stretch;
    align-items: stretch;
  }
  .screen-view {
    min-width: 800px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .flex.row {
    justify-content: space-between;
    margin: 20px;
  }
  .counter {
    display: flex;
    width: 20vh;
  }
  .border {
    border: 3px black solid;
  }
  .price {
    display: flex;
    justify-content: flex-end;
  }
`;

export const AddIcon = styled(Icon)`
  font-size: 30px;
  margin: 10px;
`;
export const AddButton = styled(Button)`
  margin: 10px;
  font-size: 12px;
`;
// export default reservationDiv;
