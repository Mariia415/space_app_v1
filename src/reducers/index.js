import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { newsReducer } from "./newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  login: loginReducer,
});

export default rootReducer;
