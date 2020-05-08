import React, { Component } from 'react';
import EnterButton from '../ButtonContainer/EnterButton';
import SignupButton from '../ButtonContainer/SignupButton';
import CancelButton from '../ButtonContainer/CancelButton';


function Login(){

    
            return(
                <div className="login">
                <h1>This is the Login Screen</h1>
                <EnterButton />
                <SignupButton />
                <CancelButton />
                </div>
            );

    

}

export default Login;