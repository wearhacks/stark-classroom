import { BUFFERS_UPDATE } from '../constants/actionTypes';

export function buffersUpdate({name, contents}) {
  return { type: BUFFERS_UPDATE, name, contents };
}
