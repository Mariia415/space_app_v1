import { LOG_IN } from "../actions/types";

const initialState = {
    login: false,
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                ...state,
                login: action.payload,
            }
            default:
                return state;
    }
};