import { FETCH_SITS } from '../types';

const fetchSitsReducer = (state = null, action) => {
  console.log(action.payload);
  if (action.type === FETCH_SITS) {
    return action.payload;
  }
  return state;
};

export default fetchSitsReducer;
