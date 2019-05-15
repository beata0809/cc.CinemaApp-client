import { SELECT_SEAT } from '../types';

const selectSeatReducer = (state = [], action) => {
  if (action.type === SELECT_SEAT) {
    return action.payload;
  }
  return state;
};

export default selectSeatReducer;
