import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { fetchUpcomingMovies } from '../../store/actions';
import { Carousel, Spin } from 'antd';
import { CarouselDiv, InfoMovie } from './MovieCarouselStyles';


class MovieCarousel extends React.Component {

  componentDidMount() {
    this.props.fetchUpcomingMovies();
  }

  changeDate = (date) => {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return day + "." + month + "." + newDate.getFullYear();
  }

  renderMoviesCarousel = () => {
    return this.props.upcomingMovies.slice(0, 5).map(movie => {
      return (
        <div key={movie.id}>
          <InfoMovie style = {{ backgroundImage: `url(http://image.tmdb.org/t/p/w780/${movie.poster_path})` }}>
            <h3>{movie.title.toUpperCase()}</h3>
            <h4>{this.changeDate(movie.release_date)}</h4>
            {/* <p>{movie.overview}</p> */}
          </InfoMovie>
        </div>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <CarouselDiv>
        <h1>Wkrótce w kinach</h1>
          <Carousel autoplay>
            {this.props.upcomingMovies ? this.renderMoviesCarousel() : <Spin />}
          </Carousel>
        </CarouselDiv>
      </Fragment>
    );
  }
}

MovieCarousel.propTypes = {
  upcomingMovies: array,
  fetchUpcomingMovies: func,
};

const mapStateToProps = state => {
  return { upcomingMovies: state.upcomingMovies };
}

export default connect(
  mapStateToProps,
  { fetchUpcomingMovies },
)(MovieCarousel);
