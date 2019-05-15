import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';
import upcomingMovies from './reducers/upcomingMovies';
import pickedDate from './reducers/catchDate';
import sits from './reducers/sits';
import reservationForm from './reducers/reservationForm'

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
  upcomingMovies,
  pickedDate,
  sits,
  reservationForm,
});

export default rootReducer;
