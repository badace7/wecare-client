import { combineReducers } from "redux";
import userReducers from "./user.reducer";

/**
 * @func combineReducers Is the root, it organise the state in different sub-reducer.
 */
// + def2: combineReducer turns an object whose values are different reducing functions into a single reducing function that can be passed to createStore
// the resulting reducer calls every child reducer and gathers their result into a single state object

export default combineReducers({
    user: userReducers
});


