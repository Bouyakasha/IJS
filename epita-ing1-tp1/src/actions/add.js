/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import data, {getState, setState} from "../store";

const add = (x) => {
  const arr = [...getState(), x];
  return setState(arr);
 };

export default add;
