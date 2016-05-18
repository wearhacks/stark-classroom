import { LESSON_NEXT } from '../constants/actionTypes';
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
    default:
      return state;
  }
}
