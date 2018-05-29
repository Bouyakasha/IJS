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
import get from "./get";
const remove = (i) => {
 //filter... or not still have a problem, remove a single element but not in
 //the rigth order

  const res = getState();
  const index = res.indexOf(i);
  if (index !== -1){
    res.splice(index, 1); 
  }
//no use of filter because that remove all elements
/*  const l = list();
  const res = l.filter(l => l !== i);*/
  return setState(res);
};

export default remove;
