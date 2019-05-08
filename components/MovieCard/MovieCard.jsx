import React from 'react';
import { Card } from 'antd';
import { MovieContainer, TitleMovie } from './MovieCardStyles.jsx';

// użył bym tutaj komponentu funkcyjnego bo jest tylko render
// albo zamiast extends React.Component zrobił React.PureComponent
// PureCompoent jest używane zamiast Component jeżeli w klasie jest tylko metoda render()
// https://reactjs.org/docs/react-api.html#reactpurecomponent

class MovieCard extends React.Component {
  render() {
    // to samo co w MoviePanel, użyj wyrażenia warunkowego
    if (this.props.id != null) {
      return (
        <MovieContainer>
          <a href="/">
            <Card
              hoverable
              cover={
                <img alt="poster" src={`http://image.tmdb.org/t/p/w154/${this.props.poster}`} alt={this.props.title} />
              }
            >
              <TitleMovie>{`${this.props.title}`}</TitleMovie>
            </Card>
          </a>
        </MovieContainer>
      );
    } else return null;
  }
}

// PROPS TYPES

export default MovieCard;
