import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import myReducers from "./Components/reducers/MyReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(myReducers, composeEnhancers(applyMiddleware(thunk)));

export default Store;
