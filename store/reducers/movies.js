const fetchMoviesReducer = (state = null, action) => {
  // to samo co w action creatorze zaimportuj sobie zmienną z types.js
  if (action.type === 'FETCH_MOVIES') {
    return action.payload;
  }
  return state;
};

export default fetchMoviesReducer;
