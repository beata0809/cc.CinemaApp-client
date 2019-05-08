import styled from 'styled-components';

export const MovieContainer = styled.div`
  font-size: 50px;
  width: 230px;
  border-radius: 5px;
  margin: 8px;
  text-align: center;
  border: 1px #ddd solid;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s linear;
  &:hover {
    moz-box-shadow: 0 0 2px #999;
    -webkit-box-shadow: 0 0 2px #999;
    box-shadow: 0 0 2px #999;
    transform: scale(1.02);
  }
  img {
    width: 230px;
  }
`;

export const TitleMovie = styled.div`
  font-size: 1.3em;
  font-weight: 500;
  color: rgb(0, 0, 0);
`;
