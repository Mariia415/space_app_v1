import { bindActionCreators } from "redux";

const initialState = {};

export const reducerMom = (state = initialState, action) => {
  switch (action.type) {
    case "Liuda": {
      return {
        ...state,
        date: action.payload.birthday,
        news: action.payload.age,
      };
    }
  }
};
