/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import data, {getState, setState} from "../store"

const get = (i) => {
  const l = getState();
  return l.find(i);
};

export default get;
