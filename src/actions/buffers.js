import { BUFFERS_UPDATE } from '../constants/actionTypes';

export function buffersUpdate({ fileName, value }) {
  return { type: BUFFERS_UPDATE, fileName, value };
}
