import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { user } from "./reducers/user";

const InitialState = {};

export const updateUserData = (isLogged) => (dispatch) => {
  return dispatch({
    type: "updateUserData",
    value: isLogged
  });
};

export function initializeStore() {
  return createStore(
    combineReducers({ user }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
