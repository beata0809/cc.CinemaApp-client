import moviedb from '../../apis/moviedb';
import server from '../../apis/server';
import { FETCH_MOVIES, FETCH_UPCOMING_MOVIES, CATCH_MOVIE, CATCH_DATE, FETCH_SITS, CATCH_HOUR } from '../types';

export const fetchSits = (title, date) => async dispatch => {
  try {
    const { data } = await server.get(`ticket/${title}/${date}`);
    dispatch({
      type: FETCH_SITS,
      payload: data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

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

export const catchHour = par => ({
  type: CATCH_HOUR,
  payload: par,
});
