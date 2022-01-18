import { useState } from 'react';
import PropTypes from 'prop-types';
import {user, pwd} from '../../sensitiveData';
import LoginForm from '../../components/forms/loginForm';


const Login = ({doLogin}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
          if(username === user && password === pwd){
            sessionStorage.setItem('login', 'true');
            const login = sessionStorage.getItem('login');
            console.log(login);
            doLogin(login);              
        } else {
          e.preventDefault();
        }  
    }

    return(
    <LoginForm 
      handleSubmit = {handleSubmit}
      setUserName = {setUserName}
      setPassword = {setPassword}
    />

    )
 }

Login.propTypes = {
    doLogin: PropTypes.func.isRequired
  }
export default Login;