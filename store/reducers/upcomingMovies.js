import { FETCH_UPCOMING_MOVIES } from '../types';

const fetchUpcomingMoviesReducer = (state = null, action) => {
  if (action.type === FETCH_UPCOMING_MOVIES) {
    return action.payload;
  }
  return state;
};

export default fetchUpcomingMoviesReducer;
