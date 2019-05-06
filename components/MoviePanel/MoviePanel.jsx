import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions';
import { MovieDiv } from './MoviePanelStyles.jsx';
import MovieCard from '../MovieCard';

class MoviePanel extends React.Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  // zrobił bym osobną metode (np. renderMovies) renderującą filmy dynamicznie, przy użyciu filter() i map()
  // filter to przefiltrowania po indexie tablicy, która przychodzi z api tak zeby było tylko 5 filmów
  // map to utworzenia MovieCard dla każdego elementu w tabllicy utworzonej przez filter

  render() {
    console.log(this.props.movies);
    // starczy samo (this.props.movies) bo null jest wartością falsy, ale i tak to jest złe podejście ;)
    // zamiast tego if'a w MovieDiv można zrobić operator warunkowy => {this.props.movies ? this.renderMovies : "Loading..."}
    // zamiast tego Loading.. na antd są gotowe komponenty takich loaderów co się kręcą, także możesz taki wstawić. Nazywa się to chyba Spinner, ale nie jestem pewnien
    if (this.props.movies != null) {
      return (
        <div>
          <Divider>Movies Now Playing</Divider>
          <MovieDiv>
            <MovieCard
              id={this.props.movies[0].id}
              title={this.props.movies[0].title}
              poster={this.props.movies[0].poster_path}
              overview={this.props.movies[0].overview}
            />
            <MovieCard
              id={this.props.movies[1].id}
              title={this.props.movies[1].title}
              poster={this.props.movies[1].poster_path}
              overview={this.props.movies[1].overview}
            />
            <MovieCard
              id={this.props.movies[2].id}
              title={this.props.movies[2].title}
              poster={this.props.movies[2].poster_path}
              overview={this.props.movies[2].overview}
            />
            <MovieCard
              id={this.props.movies[3].id}
              title={this.props.movies[3].title}
              poster={this.props.movies[3].poster_path}
              overview={this.props.movies[3].overview}
            />
            <MovieCard
              id={this.props.movies[4].id}
              title={this.props.movies[4].title}
              poster={this.props.movies[4].poster_path}
              overview={this.props.movies[4].overview}
            />
          </MovieDiv>
        </div>
      );
    } else return null;
  }
}

//Props validation
// MoviePanel.propsTypes = {
//  trzeba przypisać propsom ich typy, tak jak w pdfie.
// }

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies },
)(MoviePanel);
