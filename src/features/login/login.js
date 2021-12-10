import { useState } from 'react';
import PropTypes from 'prop-types';
import { testAccess } from '../../sensitiveData';
import LoginForm from '../../components/forms/LoginForm';


const Login = ({doLogin}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(testAccess.some((user) => 
        username === Object.keys(user).join() && password === Object.values(user).join())){
            doLogin();
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