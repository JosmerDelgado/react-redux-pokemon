import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rooterReducer from "../reducers";

export default function configureStore(initialState) {
  return createStore(rooterReducer, initialState, applyMiddleware(thunk));
}
