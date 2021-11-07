import React from "react";
import { guestAccessCodes } from "../../sensitiveData";

const AuthorizationHOC = (WrappedComponent1, WrappedComponent2 ) => {
    return(
        class withAuthorization extends React.Component{
            state = {
                password: ""
            }
            
            handleAuthorization = (e) => {
                this.setState({password: document.querySelector('.value').value})
                e.preventDefault();
                
                if(document.querySelector('.value').value !== ''){
                    document.querySelector('form').setAttribute('class', 'none');
                }
             };

            tryAgain = () => {
                this.setState({password: ""});
                document.querySelector('form').classList.remove('none');
                
             };

           
            render(){
                const authorization = this.state.password;
                if (authorization === '') {
                    return (
                        <>
                        <form onSubmit = {this.handleAuthorization}>
                         <input className="value" type="text" minLength="4" maxLength="4" placeholder='Enter 4 digit access code'/>
                         <button  type="submit">Submit</button>
                        </form>
                        <div>Please enter your access code</div>
                        </>
                    )
                }
                                
                return(
                    <>
                    <form onSubmit = {this.handleAuthorization}>
                      <input className="value" type="text" minLength="4" maxLength="4" />
                      <button  type="submit">Submit</button>
                      </form>
                      {guestAccessCodes.includes(authorization)
                      ? <WrappedComponent1/>
                      : <WrappedComponent2 tryMethod ={this.tryAgain}/>
                }
                </>
                      
                    
                )
            }
        }
    )
}
export default AuthorizationHOC;