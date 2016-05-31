import { LESSON_NEXT, BUFFERS_UPDATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './instructionsInitialState';

export default function instructions(state=initialState, action) {
  switch (action.type) {
    case LESSON_NEXT:
      return objectAssign({}, state, {
        progress: {
          lesson: state.progress.lesson + 1
        }
      });
    case BUFFERS_UPDATE:

      // let instructionCurrent = ...;

      // action.buffer.mimeType

      // let validator = validators(action.buffer.mimeType);
      // let pass = validator[exerciseCurrent.validator](
          // action.buffer.value, exerciseCurrent.condition);



      // let pass = html.includes(exerciseCurrent.pass.has, )

      // Check for validity against current instruction

      // action.fileName
      // action.value

      // s

      return state;
    default:
      return state;
  }
}
