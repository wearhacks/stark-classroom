import { BUFFERS_UPDATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './buffersInitialState';

export default function buffers(state=initialState, action) {
  switch (action.type) {
    case BUFFERS_UPDATE:
      return objectAssign({}, state, {});
    default:
      return state;
  }
}
