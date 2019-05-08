import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions';
import { MovieDiv, LoadDiv} from './MoviePanelStyles';
import MovieCard from '../MovieCard';
import { Spin } from 'antd';
import { string, number } from 'prop-types';

class MoviePanel extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return this.props.movies ? renderMovies(this.props) : loading();
  }
}


const renderMovies = (props) => {
  const movies = props.movies.slice(0, 5).map((movie,index) => {
    return (
      <MovieCard
        key={index}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        overview={movie.overview}
      />
    );
  });

  return (
    <div>
      <Divider>Movies Now Playing</Divider>
      <MovieDiv>
        {movies}
      </MovieDiv>
    </div>
  );
}

const loading = () => {
  return (
    <LoadDiv>
      <Spin tip="Loading..."/>
    </LoadDiv>
  );
}

MoviePanel.propsTypes = {
  id: number,
  title: string,
  poster: string,
  overview: string
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies },
)(MoviePanel);
