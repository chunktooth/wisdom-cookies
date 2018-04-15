import { combineReducers } from 'redux';
import wisdomPaperReducer from './wisdomPaperReducer';
import jarReducer from './jarReducer';

const rootReducer = combineReducers({
  wisdoms: wisdomPaperReducer,
  jar: jarReducer
});

export default rootReducer;
