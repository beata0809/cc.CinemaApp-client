import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies} from '../../store/actions';
import { MovieDiv } from './MoviePanelStyles.jsx';
import MovieCard from '../MovieCard';
import { Divider } from 'antd';


class MoviePanel extends React.Component {

  componentDidMount() {
    this.props.fetchMovies();
  };

  render() {
    console.log(this.props.movies);
    if (this.props.movies!=null) {
      return (
        <div>
          <Divider>Movies Now Playing</Divider>
          <MovieDiv>
            <MovieCard
              id = {this.props.movies[0].id}
              title = {this.props.movies[0].title}
              poster = {this.props.movies[0].poster_path}
              overview = {this.props.movies[0].overview}
            />
            <MovieCard
              id = {this.props.movies[1].id}
              title = {this.props.movies[1].title}
              poster = {this.props.movies[1].poster_path}
              overview = {this.props.movies[1].overview}
            />
            <MovieCard
              id = {this.props.movies[2].id}
              title = {this.props.movies[2].title}
              poster = {this.props.movies[2].poster_path}
              overview = {this.props.movies[2].overview}
            />
            <MovieCard
              id = {this.props.movies[3].id}
              title = {this.props.movies[3].title}
              poster = {this.props.movies[3].poster_path}
              overview = {this.props.movies[3].overview}
            />
            <MovieCard
              id = {this.props.movies[4].id}
              title = {this.props.movies[4].title}
              poster = {this.props.movies[4].poster_path}
              overview = {this.props.movies[4].overview}
            />

          </MovieDiv>
        </div>
      );
    } else return null;
  }

}


const mapStateToProps = (state) => {
  return {movies: state.movies};
}

export default connect(mapStateToProps, {fetchMovies})(MoviePanel);
