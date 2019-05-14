import styled from 'styled-components';

export const DateDiv = styled.div`
  font-size: 16px;
  margin: 20px 10%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DateAnchor = styled.a `
  &:first-of-type * {
    background-color: #aaa;
    color: white;
  }
  &:focus * {
    background-color: #aaa;
    color: white;
  }
  .not-focused {
    & * {
      background-color: white;
      color: black;
    }
    background-color: white;
  }
`;

export const DateContainer = styled.div `
  height: 180px;
  width: 150px;
  border-radius: 10px;
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

