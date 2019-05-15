import styled from 'styled-components';

export const CarouselDiv = styled.div`
  margin: 0;
  text-align: center;
  .slick-slide {
    text-align: center;
    height: 350px;
    background: #f2f2f2;
    overflow: hidden;
  }
  h1 {
    margin: 0;
    padding: 5px;
    color: rgb(51, 51, 51);
    background-color: rgba(204, 204, 204, 0.5);
    font-size: 1.3em;
    font-family: Andale Mono, monospace;
    font-weight: 700;
    letter-spacing: .2em
  }
`;

export const InfoMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  top: 0;
  text-align: center;
  background-color: rgba(77, 77, 77, 0.45);
  background-size: cover;
  background-position: center;
  color: #fff;
  h3 {
    padding: 10% 10% 0 10%;
    margin:0;
    flex: 1 1 45%;
    justify-content: center;
    background-color: rgba(77, 77, 77, 0.65);
    color: rgb(241, 241, 241);
    font-size: 4em;
    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  }
    h4 {
    padding: 0 10% 10% 10%;
    margin:0;
    flex: 2 2 55%;
    background-color: rgba(77, 77, 77, 0.65);
    color: rgb(241, 241, 241);
    height: 250px;
    font-size: 1.5em;
    font-weight: 300;
  }
`;

