import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rooterReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState) {
  return createStore(
    rooterReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
