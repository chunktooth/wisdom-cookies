import { combineReducers } from 'redux';
import cookieReducer from './cookieReducer';

const rootReducer = combineReducers({
  message: cookieReducer
});

export default rootReducer;
