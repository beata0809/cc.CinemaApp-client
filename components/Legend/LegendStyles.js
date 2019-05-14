import styled from 'styled-components';

export const OneSit = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => (props ? props.color : 'black')};
  border: 3px solid black;
`;
export const LineDiv = styled.div`
  font-size: 30px;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  align-items: center;
  display: flex;
`;
export const LegendDiv = styled.div`
  font-size: 30px;
  justify-content: space-around;
  margin: 20px;
  display: flex;
`;
export const TextDiv = styled.div`
  font-size: 20px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 20px;
  display: flex;
`;
