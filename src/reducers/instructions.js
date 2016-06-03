import { LESSON_NEXT, BUFFERS_UPDATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './instructionsInitialState';

export default function instructions(state=initialState, action) {
  switch (action.type) {
    case LESSON_NEXT:
      console.log('> progress: ' +JSON.stringify(state.progress));
      const progressAdvance = objectAssign({}, state.progress, {
        lesson: state.progress.lesson + 1
      });
      return objectAssign({}, state, {
        progress: progressAdvance
      });
    case BUFFERS_UPDATE:
      return state;
    default:
      return state;
  }
}
