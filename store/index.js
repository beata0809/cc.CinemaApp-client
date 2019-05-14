import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';
import pickedDate from './reducers/catchDate';

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
  pickedDate,
});

export default rootReducer;
