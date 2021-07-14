// const initialState = {};
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "Liuda": {
//       return {
//         ...state,
//         date: action.payload.birthday,
//         news: action.payload.age,
//       };
//     }
//     case "Masha": {
//       return {
//         ...state,
//         date: action.payload.birthday,
//         news: action.payload.age,
//       };
//     }
//     case "load": {
//       return {
//         ...state,
//         date: action.payload.date,
//         info: action.payload.info,
//         title: action.payload.title,
//       };
//     }
//     default:
//       return initialState;
//   }
// };
import { combineReducers } from "redux";
import { reducerMe } from "./reducerMe";
import { reducerMom } from "./reducerMom";

const rootReducer = combineReducers({
  me: reducerMe,
  mom: reducerMom,
});

export default rootReducer;
