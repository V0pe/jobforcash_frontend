import { FETCH_LABORERS } from '../actions/.';

const initialState = [];

const laborersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LABORERS:
      return action.payload;
    default:
      return state;
  }
};

export default laborersReducer;