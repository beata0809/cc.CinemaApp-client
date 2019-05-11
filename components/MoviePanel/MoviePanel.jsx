import React from 'react';
import { Divider, Spin, Modal } from 'antd';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import InfoModal from '../InfoModal';
import { fetchMovies } from '../../store/actions';
import { MovieDiv, LoadDiv } from './MoviePanelStyles.js';
import MovieCard from '../MovieCard';

class MoviePanel extends React.Component {
  state = { visible: false };

  componentDidMount() {
    this.props.fetchMovies();
  }

  loading = () => {
    return (
      <LoadDiv>
        <Spin tip="Loading..." />
      </LoadDiv>
    );
  };

  showModal = e => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  renderMovies = () => {
    const movies = this.props.movies.slice(0, 5).map(movie => {
      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          overview={movie.overview}
        />
      );
    });

    const modals = this.props.movies.slice(0, 5).map(movie => {
      return (
        <InfoModal
          key={movie.id}
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
        <MovieDiv onClick={this.showModal}>{movies}</MovieDiv>
        <Modal visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          {modals}
        </Modal>
      </div>
    );
  };

  render() {
    // eslint-disable-next-line no-use-before-define
    console.log(this.props.movies);
    return this.props.movies ? this.renderMovies() : this.loading();
  }
}

MoviePanel.propTypes = {
  movies: object,
  fetchMovies: func,
};

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { fetchMovies },
)(MoviePanel);
