import { BUFFERS_UPDATE } from '../constants/actionTypes';
import objectAssign from 'object-assign';

const web = require('../courses/web.json');

export default function buffers(state=web.buffers, action) {
  switch (action.type) {
    case BUFFERS_UPDATE:
      return state.map((buffer) => {
        return (buffer.fileName === action.fileName) ?
          objectAssign({}, buffer, {
            value: action.value
          })
        :
          buffer;
      });
    default:
      return state;
  }
}
