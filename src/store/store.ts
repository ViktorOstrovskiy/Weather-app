import { createStore } from "redux";
import reducer from "./from-service/reducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  weathers: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
