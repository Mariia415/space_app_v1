// import { bindActionCreators } from "redux";

// const initialState = {};

// export const reducerMom = (state = initialState, action) => {
//   if (action.type) {
//     switch (action.type) {
//       case "Liuda": {
//         return {
//           ...state,
//           date: action.payload.date,
//           news: action.payload.title,
//         };
//       }
//     }
//     return {
//       ...initialState,
//     };
//   }
// };
import { GET_IMG } from "../actions/types";

const initialState = {
  gallery: [],
};

export const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMG:
      console.log("reducer imgs");
      return {
        ...state,
        gallery: action.payload,
      };
    default:
      return state;
  }
};
