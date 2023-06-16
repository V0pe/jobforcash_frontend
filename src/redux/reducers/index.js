import { combineReducers } from 'redux';
import authReducer from './auth';
import laborersReducer from './laborers';

const rootReducer = combineReducers({
  auth: authReducer,
  laborers: laborersReducer,
});

export default rootReducer;
