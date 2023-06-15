import { FETCH_LABORERS } from '.';
import { getToken } from './auth';

export const displayLaborers = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/v1/laborers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  });
  if (response.ok) {
    const data = await response.json();
    const laborers = data.map((laborer) => laborer.attributes);
    dispatch({ type: FETCH_LABORERS, payload: laborers });
  } else {
    dispatch({ type: FETCH_LABORERS, payload: [] });
  }
};
