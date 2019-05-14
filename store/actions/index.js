import server from '../../apis/server';
import { FETCH_SITS } from '../types';

export const fetchSits = (title, date) => async dispatch => {
  try {
    const { data } = await server.get(`ticket/${title}/${date}`);
    dispatch({
      type: FETCH_SITS,
      payload: data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
