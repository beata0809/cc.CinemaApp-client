import styled from 'styled-components';

export const ScreenDiv = styled.div`
  min-width: 800px;
  min-height: 500px;
  ${'' /* width: 800px; */}
  ${'' /* height: 500px; */}
  border: 3px black solid;
  ${'' /* display: flex; */}
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  display: grid;
  grid-template-areas: "screen screen screen"
                       "rows-left sits rows-right"
`;

export const OneSit = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgrey;
`;
export const SitsDiv = styled.div`
  grid-area: sits;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-row-gap: 10px;
`;
export const ScreenInHall = styled.div`
  grid-area: screen;
`;
export const LeftRows = styled.div`
  grid-area: rows-left;
`;
export const RightRows = styled.div`
  grid-area: rows-right;
`;
