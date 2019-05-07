import styled from 'styled-components';

const DateContainer = styled.div`
  height: 180px;
  width: 150px;
  border-radius: 5px;
  margin: 8px;
  text-align: center;
  border: 1px #ddd solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 0.2s linear;
  &:hover {
    -moz-box-shadow: 0 0 2px #999;
    -webkit-box-shadow: 0 0 2px #999;
    box-shadow: 0 0 2px #999;
    transform: scale(1.02);
  }
`;
export default DateContainer;
