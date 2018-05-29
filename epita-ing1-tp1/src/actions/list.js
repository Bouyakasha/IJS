/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import data, { getState } from "../store.js"
const list = () => {return getState()};

export default list;
