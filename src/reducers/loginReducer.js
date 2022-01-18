import { DO_LOGIN } from "../actions/types";

const initialState = {
    login: false,
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
      case DO_LOGIN:
        return {
          ...state, 
          login: action.payload,
        };
      default:
        return state;    
    }
};