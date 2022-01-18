import { DO_LOGIN } from "./types";

export const loginAction = (log = false) => (dispatch) => {
  
    dispatch({
        type: DO_LOGIN,
        payload: log ? true : false, 
    })
}