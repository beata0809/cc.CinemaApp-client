import moviedb from '../../apis/moviedb';

export const fetchMovies = () => async dispatch => {
  try {
    const { data } = await moviedb.get(`/`); // powinno być await mociedb.get('/')
    dispatch({
      type: 'FETCH_MOVIES', // zrób zmienną const FETCH_MOVIES = "FETCH_MOVIES" w pliku types.js i ją tu zaimportuj i wstaw w to miejsce
      payload: data.results,
    });
  } catch (ex) {
    console.log(ex);
  }
};
