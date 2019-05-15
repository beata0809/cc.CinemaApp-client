import { FETCH_RESERVATION_FORM } from '../types';

const fetchReservationFormReducer = (state = null, action) => {
  // console.log(action.payload);
  if (action.type === FETCH_RESERVATION_FORM) {
    return action.payload;
  }
  return state;
};

export default fetchReservationFormReducer;
