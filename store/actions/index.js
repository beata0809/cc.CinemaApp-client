import moviedb from '../../apis/moviedb';
import { FETCH_MOVIES, CATCH_MOVIE, CATCH_DATE } from '../types';

export const fetchMovies = () => async dispatch => {
  try {
    const { data } = await moviedb.get(``);
    dispatch({
      type: FETCH_MOVIES,
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
