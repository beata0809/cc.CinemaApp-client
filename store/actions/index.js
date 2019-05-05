import moviedb from '../../apis/moviedb';

export const fetchMovies = () => async dispatch => {
  const response = await moviedb.get(``);
  const arr = response.data.results;

  dispatch({
    type: 'FETCH_MOVIES',
    payload: arr
  });
}
