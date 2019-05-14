import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';
import upcomingMovies from './reducers/upcomingMovies';

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
  upcomingMovies,
});

export default rootReducer;
