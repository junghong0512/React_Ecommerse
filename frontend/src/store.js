import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducer/productReducers";

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)) // middleware for redux allows async operation inside action
);

export default store;
