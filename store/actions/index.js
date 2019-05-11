import moviedb from '../../apis/moviedb';
import { FETCH_MOVIES } from '../types';

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
