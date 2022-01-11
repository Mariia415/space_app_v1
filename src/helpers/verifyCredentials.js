import { user, pwd } from "./sensitiveData"
export const verifyCredentials = (username, password) => {
    
    return username === user && password === pwd ? true : false;
}