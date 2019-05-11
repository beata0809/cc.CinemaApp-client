import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';
import singleMovie from './reducers/catchMovie';

const rootReducer = combineReducers({
  form: formReducer,
  movies,
  singleMovie,
});

export default rootReducer;
