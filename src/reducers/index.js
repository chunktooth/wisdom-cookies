import { combineReducers } from 'redux';
import wisdomPaperReducer from './wisdomPaperReducer';

const rootReducer = combineReducers({
  wisdoms: wisdomPaperReducer
});

export default rootReducer;
