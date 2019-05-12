import { CATCH_MOVIE } from '../types';

const catchMovieReducer = (state = {}, action) => {
  console.log(action.payload);
  if (action.type === CATCH_MOVIE) {
    return action.payload;
  }
  return state;
};

export default catchMovieReducer;
