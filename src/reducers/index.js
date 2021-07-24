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
import { newsReducer } from "./newsReducer";
import { galleryReducer } from "./galleryReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  gallery: galleryReducer,
});

export default rootReducer;
