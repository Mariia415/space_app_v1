import { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/forms/loginForm';
import { verifyCredentials } from '../../helpers/verifyCredentials';

const Login = ({doLogin}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(verifyCredentials(username, password)){
          sessionStorage.setItem('login', true);
          const log = sessionStorage.getItem('login');
          doLogin(log);
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