import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit = {handleSubmit}>
            <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
            <button type="submit" >Submit</button>
            </div>
      </form>
    </div>
    )
}

Login.propTypes = {
    doLogin: PropTypes.func.isRequired
  }
export default Login;