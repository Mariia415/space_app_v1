
import Input from "../inputs/input";

const LoginForm = ({
    handleSubmit,
    setUserName,
    setPassword}) => {
        return (
            <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit = {handleSubmit}>
                <Input 
                name ="Username"
                setValue = {setUserName}
                type = "text"
                />
                <Input
                name = "Password"
                setValue = {setPassword}
                type = "password"
                />
                <div>
                <button type="submit" >Submit</button>
                </div>
          </form>
        </div>
        )
    
}

export default LoginForm;
