import styled from 'styled-components';

const DateDiv = styled.div`
  font-size: 16px;
  margin: 20px 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .date-container {
    height: 180px;
    width: 150px;
    border-radius: 5px;
    margin: 8px;
    text-align: center;
    border: 1px #ddd solid;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform .2s linear;
    &:hover {
      -moz-box-shadow: 0 0 2px #999;
      -webkit-box-shadow: 0 0 2px #999;
      box-shadow: 0 0 2px #999;
      transform: scale(1.02);
    }
  }
`;
export default DateDiv;
