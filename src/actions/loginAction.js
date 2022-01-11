import { LOG_IN } from "./types";

export const loginAction = (log) => (dispatch) => {
    
    dispatch({
        type: LOG_IN,
        payload: log ? true : false,
    });
};