import { combineReducers } from "redux";
import loadingReducer from "./loadingPost";
import postReducer from "./post";
import userReducer from "./user";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    postLoading: loadingReducer
})
export default rootReducer;