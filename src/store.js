import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  compose(
        applyMiddleware(thunk), 
        devToolsEnhancer({trace:true})
    )
);

export default store;
