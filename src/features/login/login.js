import { useState } from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../../components/forms/LoginForm';


const Login = ({doLogin}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === 'js' && password === '1111'){
            doLogin();
        }
        // sessionStorage.setItem('login', true)
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