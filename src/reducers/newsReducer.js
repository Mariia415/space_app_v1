// const initialState = {
//   date: 39,
//   news: 39,
// };

// export const reducerMe = (state = initialState, action) => {
//   if (action.type) {
//     switch (action.type) {
//       case "Masha": {
//         return {
//           ...state,
//           date: action.payload.birthday,
//           news: action.payload.age,
//         };
//       }
//     }
//   }
//   return {
//     ...initialState,
//   };
// };

import { GET_NEWS } from "../actions/types";

const initialState = {
  news: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      console.log("reducer news");
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};
