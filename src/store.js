import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "react-redux";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

// reducer (we will bring reducers here)
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});

// if we want something to be loaded when redux-store loads,initially we can put it here
const initialState = {};

// array of all middlewares
const middleware = [thunk];

// creating store (first thing we need to pass is our reducer, second initialState and third middleware)
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
