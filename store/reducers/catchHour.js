import { CATCH_HOUR } from '../types';

const catchHourReducer = (state = {}, action) => {
  if (action.type === CATCH_HOUR) {
    return action.payload;
  }
  return state;
};

export default catchHourReducer;
