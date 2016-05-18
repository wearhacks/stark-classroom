import { combineReducers } from 'redux';
import buffers from './buffers';
import instructions from './instructions';

const rootReducer = combineReducers({
  buffers,
  instructions
});

export default rootReducer;
