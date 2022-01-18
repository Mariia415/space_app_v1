import { combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  login: loginReducer,
});

export default rootReducer;
