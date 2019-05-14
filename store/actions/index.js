import moviedb from '../../apis/moviedb';
import { FETCH_MOVIES, FETCH_UPCOMING_MOVIES, CATCH_MOVIE, CATCH_DATE } from '../types';

export const fetchMovies = () => async dispatch => {
  try {
    const { data } = await moviedb.get(`/now_playing`);
    dispatch({
      type: FETCH_MOVIES,
      payload: data.results,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export const fetchUpcomingMovies = () => async dispatch => {
  try {
    const { data } = await moviedb.get(`/upcoming`);
    dispatch({
      type: FETCH_UPCOMING_MOVIES,
      payload: data.results,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export const catchMovie = par => ({
  type: CATCH_MOVIE,
  payload: par,
});

export const catchDate = par => ({
  type: CATCH_DATE,
  payload: par,
});
