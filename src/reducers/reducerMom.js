import { bindActionCreators } from "redux";

const initialState = {};

export const reducerMom = (state = initialState, action) => {
  if (action.type) {
    switch (action.type) {
      case "Liuda": {
        return {
          ...state,
          date: action.payload.date,
          news: action.payload.title,
        };
      }
    }
    return {
      ...initialState,
    };
  }
};
