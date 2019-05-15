import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';
import upcomingMovies from './reducers/upcomingMovies';
import pickedDate from './reducers/catchDate';
import pickedHour from './reducers/catchHour';
import sits from './reducers/sits';

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
  upcomingMovies,
  pickedDate,
  pickedHour,
  sits,
});

export default rootReducer;
