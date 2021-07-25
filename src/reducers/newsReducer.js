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
