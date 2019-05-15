import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';
import pickedDate from './reducers/catchDate';
import pickedHour from './reducers/catchHour';

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
  pickedDate,
  pickedHour,
});

export default rootReducer;
