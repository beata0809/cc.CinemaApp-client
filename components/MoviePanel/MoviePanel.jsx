/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import { Divider, Spin, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';
import InfoModal from '../InfoModal';
import { fetchMovies, catchMovie } from '../../store/actions';
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

  showModal = (e, movie) => {
    e.preventDefault();
    this.props.catchMovie(movie);
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
    return this.props.movies.slice(0, 5).map(movie => {
      return (
        <div key={movie.id} onClick={e => this.showModal(e, movie)}>
          <MovieCard id={movie.id} title={movie.title} poster={movie.poster_path} overview={movie.overview} />
        </div>
      );
    });
  };

  render() {
    // eslint-disable-next-line no-use-before-define
    return (
      <Fragment>
        <Divider>Aktualnie w kinach</Divider>
        <MovieDiv>{this.props.movies ? this.renderMovies() : this.loading()}</MovieDiv>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="anuluj" onClick={this.handleCancel}>
              Anuluj
            </Button>,
            <Link key="rezerwuj" to="/reservation">
              <Button type="primary" onClick={this.handleOk}>
                Rezerwuj
              </Button>
            </Link>,
          ]}
        >
          {
            <InfoModal
              id={this.props.singleMovie.id}
              title={this.props.singleMovie.title}
              poster={this.props.singleMovie.poster_path}
              overview={this.props.singleMovie.overview}
            />
          }
        </Modal>
      </Fragment>
    );
  }
}

MoviePanel.propTypes = {
  movies: object,
  singleMovie: object,
  fetchMovies: func,
  catchMovie: func,
};

const mapStateToProps = state => {
  return { movies: state.movies, singleMovie: state.singleMovie };
};

export default connect(
  mapStateToProps,
  { fetchMovies, catchMovie },
)(MoviePanel);
