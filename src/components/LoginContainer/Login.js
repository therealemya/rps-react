import React, { Component } from 'react';
import EnterButton from '../ButtonContainer/EnterButton';
import CancelButton from '../ButtonContainer/CancelButton';
import SignupButton from '../ButtonContainer/SignupButton';

function Login() {
    return (
        <div className="login">
            <h1>Log In</h1>
            <center><div className="loginInfo">
                <form>                 



                    <input className="inputBox" type="text" name="username" placeholder="Username" />                    

                    <br/>
                    <br/>  

                    <input className="inputBox" type="password" name="password" placeholder="Password" />

                    <br/>
                    <br/>                   

                        <center>
                           <div class="btn-group" role="group" aria-label="Basic example"> 
                            <button type="button" className="btn btn-primary enter">Enter</button>
                            <CancelButton />
                            </div>
                        </center>
                        <br/>
                        <button type="button" className="btn btn-link">Forgot your password?</button>

                    
                </form>
            </div></center>
        </div>
    );

}

export default Login;