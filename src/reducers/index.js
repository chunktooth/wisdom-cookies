import { combineReducers } from 'redux';
import wisdomPaperReducer from './wisdomPaperReducer';
import jarReducer from './jarReducer';
import moonReducer from './moonReducer';

const rootReducer = combineReducers({
  wisdoms: wisdomPaperReducer,
  jar: jarReducer,
  moonphases: moonReducer
});

export default rootReducer;
