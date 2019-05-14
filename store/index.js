import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sits from './reducers/sits';

const rootReducer = combineReducers({
  form: formReducer,
  sits,
});

export default rootReducer;
