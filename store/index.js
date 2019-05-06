import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import movies from './reducers/movies';

const rootReducer = combineReducers({
  form: formReducer,
  movies: movies, // w ES6 jeżeli klucz i wartość nazywają się tak samo można zapisać nazwe tylko raz czyli zamisat movies: movies starczy samo movies
});

export default rootReducer;
