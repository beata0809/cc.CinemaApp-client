import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';

const rootReducer = combineReducers({
  form: formReducer,
  movies: movies,
});

export default rootReducer;
