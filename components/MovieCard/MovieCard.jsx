import React from 'react';
import { MovieContainer, TitleMovie } from './MovieCardStyles.jsx';
import { Card } from 'antd';


class MovieCard extends React.Component {

    render() {
      if (this.props.id!=null){
      return (
        <MovieContainer>
          <a href="/">
              <Card
                hoverable
                cover={<img alt="poster" src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />}
              >
              <TitleMovie>{`${this.props.title}`}</TitleMovie>
              </Card>
          </a>
        </MovieContainer>
      );} else return null;
    }
}

export default MovieCard;
