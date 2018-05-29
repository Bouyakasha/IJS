/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import data, {getState} from "../store"

const get = () => {return getState[0]};

export default get;
