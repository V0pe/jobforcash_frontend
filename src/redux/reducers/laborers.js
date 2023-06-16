import { FETCH_LABORERS, CREATE_LABORER } from '../actions';

const initialState = [];

const laborersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LABORERS:
      return action.payload;
    case CREATE_LABORER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default laborersReducer;
