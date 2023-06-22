import { combineReducers } from 'redux';
import authReducer from './auth';
import laborersReducer from './laborers';
import reservationsReducer from './reservations';

const rootReducer = combineReducers({
  auth: authReducer,
  laborers: laborersReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
