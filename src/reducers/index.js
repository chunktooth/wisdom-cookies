import { combineReducers } from 'redux';
import jarReducer from './jarReducer';

const rootReducer = combineReducers({
  jar: jarReducer
});

export default rootReducer;
