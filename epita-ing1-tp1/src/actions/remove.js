/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import data, {getState, setState} from "../store";
import list from "./list";

const remove = (i) => {
 //filter
  const l = list();
  const res = l.filter(l => l !== i);
  return setState(res);
};

export default remove;
