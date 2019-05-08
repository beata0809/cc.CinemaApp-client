import React from 'react';
import { Card } from 'antd';
import { MovieContainer, TitleMovie } from './MovieCardStyles';
import { Spin } from 'antd';
import { string, number } from 'prop-types';

class MovieCard extends React.PureComponent {
  render() {
    return this.props.id ? renderMovie(this.props) : loading();
  }
}

const renderMovie = (props) => {
  return (
    <MovieContainer>
      <a href="/">
        <Card
          hoverable
          cover= { <img alt="poster" src={`http://image.tmdb.org/t/p/w154/${props.poster}`} alt={props.title} /> }
        >
          <TitleMovie>{`${props.title}`}</TitleMovie>
        </Card>
      </a>
    </MovieContainer>
  );
}

const loading = () => {
  return (
    <LoadDiv>
      <Spin tip="Loading..."/>
    </LoadDiv>
  );
}


MovieCard.propTypes = {
  id: number,
  title: string,
  poster: string,
  overview: string
}

export default MovieCard;
