import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from "redux-thunk";


// Create the store and define rootReducer (Contains all the sub-reducer), it take also the thunk middleware and allow redux to run asynchronously
const store = createStore(rootReducer, {}, applyMiddleware(thunk)); // redux thunk allows code to run asynchronously

export default store;