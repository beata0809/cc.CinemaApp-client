const fetchMoviesReducer = (state = null, action) => {
  if (action.type === 'FETCH_MOVIES') {
    return action.payload;
  }
  return state;
}

export default fetchMoviesReducer;
