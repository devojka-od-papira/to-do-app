import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rotoReducer from "../reducers";

const middleware = [thunk];

const store = createStore(
  rotoReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
