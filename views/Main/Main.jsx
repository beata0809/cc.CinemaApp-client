import React from 'react';
import DatePanel from '../../components/DatePanel';
import MoviePanel from '../../components/MoviePanel';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    return (
      <div>
        <DatePanel/>
        <MoviePanel />
      </div>
    );
  }
}

export default Main;
