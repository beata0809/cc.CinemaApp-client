import React from 'react';
import { Card, Spin } from 'antd';
import { string, number } from 'prop-types';
import { MovieContainer, TitleMovie, LoadDiv } from './MovieCardStyles.js';

class MovieCard extends React.Component {
  loading = () => {
    return (
      <LoadDiv>
        <Spin tip="Loading..." />
      </LoadDiv>
    );
  };

  renderMovie = () => {
    return (
      <MovieContainer>
        <a href="/">
          <Card
            hoverable
            cover={<img src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />}
          >
            <TitleMovie>{`${this.props.title}`}</TitleMovie>
          </Card>
        </a>
      </MovieContainer>
    );
  };

  render() {
    return this.props.id ? this.renderMovie(this.props) : this.loading();
  }
}

MovieCard.propTypes = {
  id: number,
  title: string,
  poster: string,
  overview: string,
};

export default MovieCard;
