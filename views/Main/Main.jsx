import React from 'react';
import DatePanel from '../../components/DatePanel';
import MoviePanel from '../../components/MoviePanel';
import MovieCarousel from '../../components/MovieCarousel';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    return (
      <div>
        <MovieCarousel />
        <DatePanel />
        <MoviePanel />
      </div>
    );
  }
}

export default Main;
