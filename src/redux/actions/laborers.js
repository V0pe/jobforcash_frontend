import { FETCH_LABORERS, CREATE_LABORER } from '.';
import { getToken } from './auth';

export const addLaborer = (laborer) => async (dispatch) => {
    const response = await fetch('http://localhost:3001/v1/laborers', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: getToken(),
       },
      body: JSON.stringify(laborer),
    });
  
    if (response.ok) {
      const { data } = await response.json();
      dispatch({
        type: CREATE_LABORER,
        payload: {
          id: data.id,
          name: data.name,
          skill: data.skill,
          country: data.country,
          city: data.city,
          price: data.price,
          image: data.image_url,
          description: data.description,
        },
      });
    }
  };

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
