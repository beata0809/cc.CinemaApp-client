import { CATCH_DATE } from '../types';

const catchDateReducer = (state = {}, action) => {
  // console.log(action.payload);
  if (action.type === CATCH_DATE) {
    return action.payload;
  }
  return state;
};

export default catchDateReducer;
